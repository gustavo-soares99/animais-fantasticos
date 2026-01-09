const animais = document.getElementById("animais");
console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection);

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const linksInternos = document.querySelector('[href^="#"]');
console.log(linksInternos);

const animaisIMG = document.querySelectorAll(".animais img");
console.log(animaisIMG);

const gridSelectionHTML = document.getElementsByClassName("grid-section");
const gridSelectionNode = document.querySelectorAll(".grid-section");

console.log(gridSelectionHTML);
console.log(gridSelectionNode);

gridSelectionNode.forEach(function (item, index) {
  console.log(index, item);
});

const arrayGrid = Array.from(gridSelectionHTML);
