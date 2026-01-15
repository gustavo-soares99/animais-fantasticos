// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");
const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);
// Selecione o primeiro DT da dl de Faq

const dls = document.querySelector(".faq-lista");

const primeiroDT = dls.children[0];
console.log(primeiroDT);

// Selecione o DD referente ao primeiro DT
const dd = primeiroDT.nextElementSibling;
console.log(dd);

// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector(".animais");
const faq = document.querySelector(".faq");

faq.innerHTML = animais.innerHTML;
