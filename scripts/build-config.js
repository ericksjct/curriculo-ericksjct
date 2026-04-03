const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const deepl = require("deepl-node");

const rootDir = path.join(__dirname, "..");
const contentPath = path.join(rootDir, "content.yaml");
const outputPath = path.join(rootDir, "config.js");

function isPlainObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}

function collectStrings(value, currentPath = [], entries = []) {
  if (typeof value === "string") {
    entries.push({ path: currentPath, value });
    return entries;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => collectStrings(item, currentPath.concat(index), entries));
    return entries;
  }

  if (isPlainObject(value)) {
    Object.entries(value).forEach(([key, nested]) => {
      collectStrings(nested, currentPath.concat(key), entries);
    });
  }

  return entries;
}

function cloneWithReplacements(value, replacementMap, currentPath = []) {
  const pathKey = JSON.stringify(currentPath);

  if (typeof value === "string") {
    return replacementMap.has(pathKey) ? replacementMap.get(pathKey) : value;
  }

  if (Array.isArray(value)) {
    return value.map((item, index) => cloneWithReplacements(item, replacementMap, currentPath.concat(index)));
  }

  if (isPlainObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, nested]) => [key, cloneWithReplacements(nested, replacementMap, currentPath.concat(key))]),
    );
  }

  return value;
}

function deepMerge(target, source) {
  if (!isPlainObject(source)) {
    return source;
  }

  const output = isPlainObject(target) ? { ...target } : {};

  Object.entries(source).forEach(([key, value]) => {
    if (isPlainObject(value) && isPlainObject(output[key])) {
      output[key] = deepMerge(output[key], value);
      return;
    }

    output[key] = value;
  });

  return output;
}

function countOverrideLeaves(value) {
  if (Array.isArray(value)) {
    return value.reduce((total, item) => total + countOverrideLeaves(item), 0);
  }

  if (isPlainObject(value)) {
    return Object.values(value).reduce((total, item) => total + countOverrideLeaves(item), 0);
  }

  return value === undefined ? 0 : 1;
}

async function translateTree(ptBrContent) {
  const apiKey = process.env.DEEPL_API_KEY;
  const entries = collectStrings(ptBrContent);

  if (!apiKey) {
    console.warn("DEEPL_API_KEY not set -- skipping translation, using PT-BR content for EN block");
    return {
      translated: ptBrContent,
      translatedCount: 0,
      warnings: ["DEEPL_API_KEY not set -- using PT-BR content as EN fallback"],
    };
  }

  const replacementMap = new Map();
  const warnings = [];
  const translator = new deepl.Translator(apiKey);
  const values = entries.map((entry) => entry.value);

  try {
    const results = await translator.translateText(values, "pt", "en-US");
    const translatedResults = Array.isArray(results) ? results : [results];

    translatedResults.forEach((result, index) => {
      replacementMap.set(JSON.stringify(entries[index].path), result.text);
    });
  } catch (error) {
    console.warn(`DeepL translation failed, using PT-BR fallback for all strings: ${error.message}`);
    warnings.push(`DeepL translation failed: ${error.message}`);

    entries.forEach((entry) => {
      replacementMap.set(JSON.stringify(entry.path), entry.value);
    });
  }

  return {
    translated: cloneWithReplacements(ptBrContent, replacementMap),
    translatedCount: entries.length,
    warnings,
  };
}

async function main() {
  if (!fs.existsSync(contentPath)) {
    console.error("content.yaml not found");
    process.exit(1);
  }

  let content;

  try {
    content = yaml.load(fs.readFileSync(contentPath, "utf8"));
  } catch (error) {
    console.error(`Failed to parse YAML: ${error.message}`);
    process.exit(1);
  }

  const site = content.site || {};
  const cta = content.cta || {};
  const hero = content.hero || {};
  const about = content.about || {};
  const skills = content.skills || {};
  const experience = content.experience || {};
  const metrics = content.metrics || {};
  const contact = content.contact || {};
  const ptBr = content.i18n_content || {};
  const enOverrides = content.en_overrides || {};

  const translationResult = await translateTree(ptBr);
  const translatedEn = deepMerge(translationResult.translated, enOverrides);
  const overrideCount = countOverrideLeaves(enOverrides);

  const portfolioConfig = {
    site,
    cta,
    hero,
    about,
    skills,
    experience,
    metrics,
    contact,
    i18n: {
      defaultLanguage: "pt-BR",
      supportedLanguages: [
        { code: "pt-BR", label: "PT-BR" },
        { code: "en", label: "EN" },
      ],
      languages: {
        "pt-BR": ptBr,
        en: translatedEn,
      },
    },
  };

  const output = `const portfolioConfig = ${JSON.stringify(portfolioConfig, null, 2)};\n`;
  fs.writeFileSync(outputPath, output, "utf8");

  console.log("Built config.js successfully");
  console.log(`Strings translated: ${translationResult.translatedCount}`);
  console.log(`Overrides applied: ${overrideCount}`);

  translationResult.warnings.forEach((warning) => console.warn(warning));
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
