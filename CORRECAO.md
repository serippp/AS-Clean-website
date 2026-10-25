# Correção de imagens e vídeos — A&S Clean

## Causa

No repositório GitHub, todos os ficheiros foram carregados na raiz. O `index.html` e o `styles.css` ainda apontavam para subpastas `assets/...`, que não existem na versão publicada. A Netlify devolvia 404 para imagens, vídeos, logótipo, cartazes e fonte.

## Substituição mínima no repositório existente

Substitua apenas estes dois ficheiros:

- `index.html`
- `styles.css`

Os restantes ficheiros do ZIP já correspondem aos ficheiros presentes na raiz do repositório.

## Netlify

- Comando de build: nenhum.
- Pasta de publicação: `.`
- Se o projeto estiver ligado ao GitHub, a substituição dos dois ficheiros desencadeia automaticamente um novo deploy.
