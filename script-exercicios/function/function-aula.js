// function darOi() {
//   console.log("Oi pra você");
// }

// darOi.call();

// function descricaoCarro(velocidade) {
//   console.log(this.marca + " " + this.ano + " " + velocidade);
// }

// // descricaoCarro.call({ marca: "Honda", ano: 2015 }, 100);

// const carros = ["Ford", "Fiat", "VW"];
// const frutas = ["Banana", "Uva", "Pera"];

// carros.forEach.call(carros, (item) => {
//   console.log(item);
// });

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function (classe) {
//   this.element.classList.add(classe);
// };

// const li = {
//   element: document.querySelector("li"),
// };

// const ul = new Dom("ul");
// ul.ativo.call(li, "ativar");

// const li = document.querySelectorAll("li");

// const filtro = Array.prototype.filter.call(li, (item) =>
//   item.classList.contains("ativo"),
// );

// console.log(filtro);

const numeros = [3, 24, 55, 34, 15, 43, 56, 42, 56, 32, 67, 22, 13, 15];

Math.max.apply(null, numeros);

const carro = {
  marca: "Ford",
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${this.aceleracao} em ${tempo}`;
  },
};

const honda = {
  marca: "Honda",
};

const acelerarHonda = carro.acelerar.bind(honda);
