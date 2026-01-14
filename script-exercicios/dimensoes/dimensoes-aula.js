const listaAnimais = document.querySelector(".animais-lista");

const height = listaAnimais.clientHeight;
const animaisTop = listaAnimais.offsetTop;

console.log(animaisTop);

const primeiroh2 = document.querySelector("h2");

const rect = primeiroh2.getBoundingClientRect();
console.log(rect);

if (rect.top < 0) {
  console.log("Passou do elemento");
}

const h2left = primeiroh2.offsetLeft;
console.log(h2left);

const small = window.matchMedia("(max-width: 600px").matches;

if (small) {
  console.log("Usuário mobile");
}
