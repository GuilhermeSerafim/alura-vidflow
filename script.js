const containerVideos = document.querySelector(".videos__container");

// Maneira mais moderna e legível
// Indicando ao js que estamos lidando com operações assincronas
async function buscarEMostrarVideos() {
    try {
        // Callback é uma função que é passada como argumento para outra função e é executada após a conclusão de uma operação assíncrona.
        const busca = await fetch("http://localhost:3000/videos"); // await aguarda até que a busca seja feita
        const videos = await busca.json();
        videos.forEach((video) => {
            if (video.categoria == "") {
                throw new Error(`O vídeo ${video.titulo} não tem categoria`)
            }
            // Corpo da segunda callback
            containerVideos.innerHTML += `
            <li class="videos__item"><iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao-video">
                    <img class="img-canal" src"${video.imagem}" alt="Logo do Canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="titulo-canal">${video.descricao}</p>
                </div>
            </li>`;
        })
    } catch (error) {
        containerVideos.innerHTML = `<p> Houve um erro ao carregar os videos: ${error}</p>`
    }
}

buscarEMostrarVideos();

const barraDePesquisa = document.querySelector('.pesquisar__input');
barraDePesquisa.addEventListener('input', filtrarPesquisa);

function filtrarPesquisa() {
    const videos = document.querySelectorAll(".videos__item");
    if (barraDePesquisa.value != "") {
        for (let video of videos) {
            let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
            let valorFiltro = barraDePesquisa.value.toLowerCase();

            // O método includes é usado para comparar se o texto do título contém a substring inserida na barra de pesquisa
            if (!titulo.includes(valorFiltro)) {
                video.style.display = "none";
            } else {
                video.style.display = "block"

            }
        }
    }
}