// Verifique a distância da primeira imagem
// em relação ao topo da página

const img = document.querySelector("img");

console.log(img.offsetTop);

// Retorne a soma da largura de todas as imagens

const imgs = document.querySelectorAll("img");
let i = 0;
imgs.forEach((item) => {
  i += item.offsetWidth;
});
console.log(i);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");

links.forEach((item) => {
  const linkWidth = item.offsetWidth;
  const linkHeight = item.offsetHeight;
  console.log(linkHeight, linkWidth);
  if (linkHeight >= 48 && linkWidth >= 48) {
    console.log(item, "Possui acessibilidade");
  } else {
    console.log(item, "Não possui acessibilidade");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const largura = window.matchMedia("(max-width: 720px)");

const menuDoSite = document.querySelector(".menu");

if (largura.matches) {
  menuDoSite.classList.add("menu-mobile");
}
