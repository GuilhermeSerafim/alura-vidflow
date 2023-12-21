const containerVideos = document.querySelector(".videos__container");

// Maneira mais moderna e legível
// Indicando ao js que estamos lidando com operações assincronas
async function buscarEMostrarVideos() {
    try {
        // Callback é uma função que é passada como argumento para outra função e é executada após a conclusão de uma operação assíncrona.
    const busca = await fetch("http://localhost:3000/videos") // await aguarda até que a busca seja feita
    const videos = await busca.json();
    videos.forEach((video) => {
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
    } finally {
        alert('Função finalizada');
    }
    
}

buscarEMostrarVideos();