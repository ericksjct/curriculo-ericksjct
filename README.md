# Curriculo Erick

Portfolio single-page estatico com conteudo centralizado em `config.js`, visual dark/warm amber e toggle PT-BR/EN.

## Estrutura editavel

Arquivos principais:
- `config.js` : bio, experiencia, skills, metricas, textos PT-BR/EN e `resumeUrl`
- `index.html` : shell da pagina e logica de renderizacao
- `styles.css` : identidade visual e responsividade
- `assets/erick-ribeiro-resume-demo.pdf` : PDF placeholder atual do CTA de download

## Preview local

Comando unico:

```bash
npm run preview
```

O script usa `npx serve . -l 4173`, sem pipeline de build. O portfolio roda diretamente a partir da raiz do repositorio.

## Checklist de verificacao responsiva

Depois de iniciar o preview local, revisar manualmente:

- `375px` : sem horizontal overflow, hero legivel, CTAs empilhados e clicaveis
- `414px` : linguagem alterna corretamente, cartoes de contato seguem visiveis, metrics nao quebram o layout
- `768px` : hero e secoes mantem hierarquia visual clara, grids colapsam sem parecer apertados

Conferir tambem:
- sem `horizontal overflow` em nenhuma largura acima
- headline e textos de apoio continuam legiveis
- toggle de idioma continua funcional
- CTA principal continua visivel
- `resume download` abre o PDF configurado

## Deploy no Netlify

Fluxo recomendado:

1. Rode `npm run preview` localmente e confira o checklist acima.
2. No Netlify, crie um novo site apontando para este repositorio.
3. Use estas configuracoes:
   - Build command: nenhum
   - Publish directory: `.`
4. Publique o projeto.

Como o site e totalmente estatico, o Netlify pode servir a raiz do repositorio sem build.

## Deploy no GitHub Pages

Fluxo documentado para este projeto:

1. Garanta que `index.html`, `styles.css`, `config.js` e `assets/` estejam na raiz do repositorio.
2. Suba o projeto para a `main branch`.
3. Em GitHub Pages, configure publicacao a partir da `main branch` e da `root`.
4. Aguarde a publicacao e valide novamente o download do curriculo e a troca de idioma.

Este fluxo e diferente do Netlify: no GitHub Pages a configuracao da plataforma e feita uma vez, e depois basta atualizar a `main branch`.

## Substituindo conteudo e curriculo

A maior parte das alteracoes futuras fica em `config.js`.

Para trocar o PDF:

1. Substitua o arquivo em `assets/`
2. Atualize `resumeUrl` em `config.js` se o nome do arquivo mudar

Para trocar o conteudo ficticio por dados reais:

1. Atualize bio, experiencias, skills e metricas em `config.js`
2. Ajuste email e LinkedIn em `config.js`
3. Revise os dois idiomas antes de publicar

## Checklist de release

- `npm run preview`
- verificar `375px`
- verificar `414px`
- verificar `768px`
- confirmar toggle PT-BR/EN
- confirmar `resumeUrl`
- confirmar contato e LinkedIn
- publicar em Netlify ou GitHub Pages
