// const h1 = document.querySelector("h1");
// const animaisLista = document.querySelectorAll(".animais-lista");

// console.log(h1.innerHTML);
// console.log(h1.outerHTML);

// const lista = document.querySelector(".animais-lista");

// console.log(lista.parentElement.parentElement);
// console.log(lista.nextElementSibling);

// const contato = document.querySelector(".contato");
// const titulo = contato.querySelector(".titulo");
// const mapa = document.querySelector(".mapa");

// contato.replaceChild(mapa, titulo);

// // contato.insertBefore(lista, titulo);

// const novoh1 = document.createElement("h1");
// novoh1.innerText = "Novo Titulo";
// novoh1.classList.add("titulo");

// mapa.appendChild(novoh1);

const h1 = document.querySelector("h1");
const faq = document.querySelector(".faq");
const cloneH1 = h1.cloneNode(true);

faq.appendChild(cloneH1);
