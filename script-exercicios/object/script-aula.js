// const carro = {
//   rodas: 4,
//   init(valor) {
//     this.marca = valor;
//     return this;
//   },
//   acelerar() {
//     return this.marca + " Acelerou";
//   },
//   buzinar() {
//     return this.marca + " buzinou";
//   },
// };

// const honda = Object.create(carro);
// honda.init("Honda");

// const ferrari = Object.create(carro).init("Ferrari");

// const funcaoAutomovel = {
//   acelerar() {
//     return "acelerou";
//   },
//   buzinar() {
//     return "buzinou";
//   },
// };

// const moto = {
//   rodas: 2,
//   capacete: true,
// };

// Object.assign(moto, funcaoAutomovel);
// console.log(moto);

// const moto = {};

// Object.defineProperties(moto, {
//   rodas: {
//     value: 2,
//     get() {
//       return this._roda;
//     },
//     set(valor) {
//       this.rodas = valor * 4;
//     },
//   },
// });

const frutas = ["Maçã"];

console.log(Object.getPrototypeOf(frutas));
