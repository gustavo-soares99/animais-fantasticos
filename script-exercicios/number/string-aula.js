console.log(Number.isNaN(NaN));

console.log(parseFloat("23423.42332423gfdgsdggdf4"));
console.log(parseInt("100.27"));
console.log(parseInt("100.27reais"));

const preco = 10.3329;

console.log(+preco.toFixed());

let valor = 48.49;
valor = valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
console.log(valor);

console.log(Math.PI);
