const containerVideos = document.querySelector(".videos__container");

// Maneira mais moderna e legível
// Indicando ao js que estamos lidando com operações assincronas
// Buscar videos e exibir no dom
async function buscarEMostrarVideos() {
    try {
        // Callback é uma função que é passada como argumento para outra função e é executada após a conclusão de uma operação assíncrona.
        const busca = await fetch("http://localhost:3000/videos"); // await aguarda até que a busca seja feita
        const videos = await busca.json();
        videos.forEach((video) => {
            if (video.categoria == "") {
                throw new Error(`O vídeo ${video.titulo} não tem categoria`);
            }
            // Corpo da segunda callback
            containerVideos.innerHTML += `
            <li class="videos__item"><iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao-video">
                    <img class="img-canal" src"${video.imagem}" alt="Logo do Canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="titulo-canal">${video.descricao}</p>
                    <p class="categoria" hidden>${video.categoria}</p>
                </div>
            </li>`;
        });
    } catch (error) {
        containerVideos.innerHTML = `<p> Houve um erro ao carregar os videos: ${error}</p>`;
    }
}

buscarEMostrarVideos();

// Filtrar pela barra de pesquisa
const barraDePesquisa = document.querySelector('.pesquisar__input');
barraDePesquisa.addEventListener('input', filtrarPesquisa);

function filtrarPesquisa() {
    const videos = document.querySelectorAll(".videos__item");
    const valorFiltro = barraDePesquisa.value.toLowerCase();

    videos.forEach((video) => {
        const tituloDoAtualVideo = video.querySelector('.titulo-video').textContent.toLowerCase(); // video é o elemento <li> inteiro
        video.style.display = !valorFiltro == "" ? tituloDoAtualVideo.includes(valorFiltro) ? 'block' : 'none' : 'none';
    });
}

// Filtrar por categoria
const botaoCategoria = document.querySelectorAll('.superior__item');
botaoCategoria.forEach((botao) => {
    let nomeCategoria = botao.getAttribute("name");
    botao.addEventListener('click', () => filtrarPorCategoria(nomeCategoria));
});

function filtrarPorCategoria(nomeCategoria) {
    // debugger
    const videos = document.querySelectorAll('.videos__item');
    if(nomeCategoria == "Tudo") {
        videos.forEach((video) => {
            video.style.display = 'block'; // Mostrar todos os videos
        })
    } else {
        videos.forEach((video) => {
            const categorialDoAtualVideo = video.querySelector('.categoria').textContent; // Puxado do json
            video.style.display = categorialDoAtualVideo.includes(nomeCategoria) ? 'block' : 'none' // Mostrar videos com a categoria clicada
        });
    }
};