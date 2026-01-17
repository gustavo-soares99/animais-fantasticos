const frase = "A melhor linguagem";
const linguagem = "Javascript";

const fraseFinal = frase.concat(linguagem, "!!", "Mais concatenado");

console.log(fraseFinal);

const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

console.log(fruta.includes(listaFrutas));
console.log(listaFrutas.includes(fruta));

console.log(fruta.startsWith("Ba"));
console.log(fruta.startsWith("ba"));

// Slice

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

console.log(transacao1.slice(0, 3));

console.log(fruta.indexOf("B"));

let preco = "R$ 99,00";
preco = preco.replace(",", ".");

const listaPrecos = ["R$ 99", "R$199", "R$12000"];

listaPrecos.forEach((item) => {
  console.log(item.padStart(10, "."));
});

let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";

const arrayLista = listaItens.split(" ");
