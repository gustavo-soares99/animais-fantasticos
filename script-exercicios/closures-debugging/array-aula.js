// const carros = ["Ford", "Fiat", "Honda"];

// carros.forEach((item) => {
//   console.log(item);
// });

// const li = document.querySelectorAll("li");

// const retornoForEach = li.forEach((i) => i.classList.add("ativa"));

// console.log(retornoForEach);

// const carros = ["Ford", "Fiat", "Honda"];

// const novaArray = carros.map((item, index, array) => {
//   return item.toUpperCase();
// });

// const numeros = [2, 4, 5, 6, 7, 8];
// const numerosX2 = numeros.map((n) => n * 2);

// console.log(novaArray);
// console.log(numerosX2);

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const tempoAulas = aulas.map((aula) => aula.item);

// const nomeAulas = function (aula) {
//   return aula.nome;
// };

// function nomeAulas(aula) {
//   return aula.nome;
// }
// const arrayNomeAula = aulas.map(nomeAulas);

// console.log(tempoAulas);

// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item) => {
//   return acumulador + item;
// }, 0);

// console.log(reduceAulas);

// const numeros = [10, 25, 30, 3, 54, 33, 22];

// const maiorNumero = numeros.reduce((anterior, atual) =>
//   anterior > atual ? anterior : atual
// );

// console.log(maiorNumero);

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const listaAulas = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {});
