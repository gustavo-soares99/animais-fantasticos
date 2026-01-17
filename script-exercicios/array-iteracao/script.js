// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll(".curso");
const arrayCursos = Array.from(cursos);

const objetosCurso = arrayCursos.map((item, index) => {
  const titulo = item.querySelector("h1").innerText;
  const descricao = item.querySelector("p").innerText;
  const aulas = item.querySelector(".aulas").innerText;
  const horas = item.querySelector(".horas").innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
});

console.log(objetosCurso);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const numerosMaioresque30 = numeros.filter((item) => {
  return item > 100;
});
console.log(numerosMaioresque30);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const temBaixo = instrumentos.some((item) => item === "Baixo");
console.log("Tem baixo: ", temBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];
//Minha Solução
// const comprasFiltradas = compras.map((item) => {
//   const itemseila = item.preco.replace("R$ ", "").replace(",", ".");
//   console.log(typeof +itemseila);
//   return +itemseila;
// });

// const valorTotal = comprasFiltradas.reduce((acc, item, index) => {
//   return acc + item;
// }, 0);

// console.log(valorTotal);

//Solução do professor

const valorTotal = compras.reduce((acumulador, item) => {
  console.log(item);
  const precoFiltrado = +item.preco.replace("R$ ", "").replace(",", ".");
  console.log(precoFiltrado);
  return acumulador + precoFiltrado;
}, 0);

console.log(valorTotal);
