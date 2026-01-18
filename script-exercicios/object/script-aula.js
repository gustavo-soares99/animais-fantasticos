// const carros = new Array("Ford", "Fiat", "Honda");

// carros[2] = "Ferrari";

// console.log(carros.length);

const li = document.querySelectorAll("li");

const arrayLi = Array.from(li);

console.log(li);
console.log(arrayLi);

const instrumentos = ["Guitarra", "Baixo", "Violão"];

instrumentos.sort();
console.log(instrumentos);

const carros = ["Ford", "Fiat", "VW"];
carros.unshift("Kia");
carros.push("Ferrari");

carros.reverse();
console.log(carros);
