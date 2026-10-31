# VidFlow 🎬

Projeto desenvolvido durante o [Curso de JavaScript: consumindo e tratando dados de uma API da Alura](https://cursos.alura.com.br/course/javascript-consumindo-tratando-dados-uma-api).

## Destaques do Aprendizado 🚀

- 🌐 Consumo de API com JavaScript.
- 🔍 Criação de filtros dinâmicos para personalização da visualização de dados.
- 🎨 Tradução de um layout predefinido em uma aplicação funcional.
- ⚙️ Utilização de async/await para operações assíncronas.
- 📺 Construção de um catálogo de vídeos a partir de uma API local, com filtros por título e categoria.
- 🤓 Prática de operações assíncronas com Promises e async/await.
- 🛠️ Exibição de mensagem quando ocorre erro durante o carregamento dos vídeos.

## Link de demonstração do VidFlow [aqui](https://alura-vidflow-9kune463u-guilhermeserafim.vercel.app)!
![GIF](https://www.bbva.com/wp-content/uploads/2018/09/BBVA_fiestacine_1020.gif)

## Escopo e dependência local

O `script.js` consulta `http://localhost:3000/videos`, renderiza vídeos incorporados e filtra os itens no navegador. Esse fluxo é de leitura; não implementa envio ou compartilhamento de vídeos. Mesmo ao abrir a página hospedada, o código depende da API em localhost para carregar o catálogo.

O `package.json` declara `json-server`. Com Node.js e npm disponíveis, `npm install` instala a dependência e `npm run start-server` observa `backend/videos.json`. Sirva a página por HTTP local em outra porta e mantenha a API em execução.
