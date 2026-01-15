const img = document.querySelector("img");

function callback() {
  console.log("clicou");
}

img.addEventListener("click", callback);

const animaisLista = document.querySelector(".animais-lista");

function callbackLista(event) {
  console.log(event.currentTarget);
  console.log(event.target);
}

// animaisLista.addEventListener("click", callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault();
  console.log("clicou link externo");
}

linkExterno.addEventListener("click", handleLinkExterno);

const h1 = document.querySelector("h1");

function handleEvent(event) {
  console.log(event.type, event);
}

// h1.addEventListener("click", handleEvent);
// h1.addEventListener("mouseenter", handleEvent);
// h1.addEventListener("mousemove", handleEvent);
// h1.addEventListener("resize", handleEvent);
// window.addEventListener("scroll", handleEvent);

function handleKeyboard(event) {
  if (event.key === "f") {
    document.body.classList.toggle("azul");
  }
  console.log(event.key);
}
window.addEventListener("keydown", handleEvent);

const imgs = document.querySelectorAll("img");

function handleImg(event) {
  console.log(event.target);
}

imgs.forEach((img) => {
  img.addEventListener("click", handleImg);
});
