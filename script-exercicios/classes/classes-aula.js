const menu = document.querySelector(".menu");

menu.classList.add("ativo");
menu.classList.remove("ativo");
menu.classList.toggle("ativo");

if (menu.classList.contains("")) {
  menu.classList.add("possui-azul");
}

const animais = document.querySelector(".animais");

console.log(animais.attributes);

const img = document.querySelector("img");

console.log(img.getAttribute("alt"));

img.setAttribute("alt", "É uma raposa");
const possuiAlt = img.hasAttribute("alt");
console.log(possuiAlt);
