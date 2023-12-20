const api = fetch("http://localhost:3000/videos")
// resposta - resposta do status da promisse
// A função json() é usada para extrair e analisar o corpo de uma resposta HTTP que está no formato JSON (JavaScript Object Notation).
.then(resposta => console.log(resposta.json()))
