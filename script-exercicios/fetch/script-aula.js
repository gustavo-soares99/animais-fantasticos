const imagem = fetch("./teste.png");

const div = document.createElement("div");

imagem
  .then((r) => r.blob())

  .then((body) => {
    const blobUrl = URL.createObjectURL(body);
    const imagemDom = document.querySelector("img");
    imagemDom.src = blobUrl;
  });
