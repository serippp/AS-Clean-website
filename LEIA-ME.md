# A&S Clean — Demonstração de website

Projeto estático em português de Portugal. HTML, CSS e JavaScript, sem instalação, compilação, backend ou serviços pagos. Inclui todos os materiais e fontes necessários.

## Ver o website

Extraia o ZIP completo e abra `index.html` no navegador. Mantenha a estrutura de pastas. O acesso aos vídeos pode variar ao abrir ficheiros locais; para avaliar a versão final, publique a pasta completa num servidor estático, como a Netlify.

## Publicar através do GitHub e da Netlify

1. Coloque todo o conteúdo desta pasta num repositório GitHub. `index.html`, `styles.css`, `main.js`, `favicon.png` e `netlify.toml` devem ficar na raiz, ao lado de `assets`.
2. Ligue esse repositório a um projeto Netlify.
3. Não é necessário comando de build. A pasta de publicação é `.` (a raiz do repositório), já definida em `netlify.toml`.
4. Depois da publicação, verifique os dois vídeos, a fotografia, o logótipo e o menu num telemóvel. Os testes incluídos foram locais; não foi realizada uma publicação remota.

Também pode publicar a pasta descomprimida diretamente num serviço de alojamento estático. Não publique o ZIP como se fosse a pasta do site.

## Estrutura

```
index.html
styles.css
main.js
favicon.png
netlify.toml
robots.txt
assets/
  fonts/manrope.woff2 + OFL.txt
  images/antes-depois.webp + hero-poster.webp + processo-poster.webp
  logo/logo.webp
  videos/Video-58545.mp4 + processo-limpeza.mp4
```

Os caminhos usam `./assets/...` e respeitam maiúsculas e minúsculas. Não renomeie nem mova ficheiros sem atualizar as referências.

## Materiais reais

- Vídeo principal: `Video-58545.mp4`, 720 × 1280, cerca de 12,8 segundos.
- Vídeo do processo: original WhatsApp Video 2026-10-25 at 5.05.13 PM.mp4, guardado como `processo-limpeza.mp4`, 480 × 848, cerca de 14,4 segundos.
- Fotografia de antes e depois: convertida para WebP, mantendo a comparação completa e sem alterar os resultados.
- Logótipo: imagem A&S Clean encontrada no ficheiro WhatsApp Image 2026-10-25 at 4.54.34 PM.jpeg, em Downloads, correspondente à empresa e à assinatura do briefing. Convertida para WebP; favicon derivado da mesma imagem.
- Posters: fotogramas extraídos dos respetivos vídeos, sem filtros.
- Vídeos preservados nos ficheiros originais, já compactos (cerca de 4 MB no total).
- Fonte Manrope incluída localmente com licença OFL. A fonte editorial complementar usa Georgia, disponível no sistema.

## Contactos e alterações

O telefone é `+351 934 417 216`. Os botões de WhatsApp apontam para `351934417216`, com mensagem preparada. Os serviços abrem uma mensagem específica. O Instagram aponta para `https://www.instagram.com/aes_clean.pt/`.

Edite textos e contactos em `index.html`. O número e as mensagens de WhatsApp também estão em `main.js`. A paleta está nas variáveis no início de `styles.css`.

## Demonstração e SEO

Por ser uma proposta comercial, a demonstração está protegida contra indexação: meta robots em `index.html`, `robots.txt` e cabeçalho X-Robots-Tag em `netlify.toml`.

Quando o proprietário aprovar o lançamento público:

- Remova a indicação de demonstração no rodapé, se pretendido.
- Remova a meta `noindex,nofollow`, o cabeçalho `X-Robots-Tag` e a restrição em `robots.txt`.
- Acrescente o endereço definitivo em `og:url` e numa ligação canonical. Troque `og:image` por um endereço HTTPS absoluto do domínio publicado. O caminho relativo existente funciona no site, mas alguns serviços de partilha exigem uma imagem com endereço absoluto.
- Confirme os contactos, a disponibilidade dos serviços e as autorizações para os materiais.

Não existem ferramentas de análise, cookies de rastreio, formulários, avaliações inventadas, garantias médicas ou estatísticas comerciais.

## Verificação

Consulte `VERIFICACAO.md` para os testes efetuados e os seus limites.
