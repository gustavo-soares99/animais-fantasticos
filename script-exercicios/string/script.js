// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let valorTaxa = 0;
let valorRecebimento = 0;

transacoes.forEach((item) => {
  if (item.descricao.includes("Taxa")) {
    valorTaxa += Number(item.valor.slice(3));
  } else {
    valorRecebimento += Number(item.valor.slice(3));
  }
});

console.log("Valor Taxa: ", valorTaxa, "Valor Recebimento", valorRecebimento);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

const arrayTransportes = transportes.split(";");
console.log(arrayTransportes);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const htmlAs = html.replace(/[span]+/g, "a");
console.log(htmlAs);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";
console.log(frase.charAt(frase.length - 1));

// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

taxasTotal = 0;
transacoes2.forEach((item) => {
  item = item.toLocaleLowerCase().trim().slice(0, 4);
  if (item === "taxa") {
    taxasTotal++;
  }
});
