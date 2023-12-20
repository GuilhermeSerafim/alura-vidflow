const containerVideos = document.querySelector(".videos__container");
// resposta - resposta do status da promisse
// json() extrai o corpo de uma resposta HTTP que está no formato JSON
const api = fetch("http://localhost:3000/videos")
    .then(resposta => resposta.json())
    .then((videos) =>
        videos.forEach((video) => {
            containerVideos.innerHTML += `
            <li class="videos__item"><iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao-video">
                    <img class="img-canal" src"${video.imagem}" alt="Logo do Canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="titulo-canal">${video.descricao}</p>
                </div>
            </li>`;
        })
    )
    .catch((erro) => {
        console.log('aconteceu um erro')
        containerVideos.innerHTML = `<p>Houve um erro ao carregar os videos: ${erro}</p>`
    })