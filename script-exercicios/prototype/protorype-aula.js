function teste() {
  return 1 + 1;
}

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function () {
  return this.nome + "Pessoa andou";
};

const andre = new Pessoa("Andre", 28);

const pais = "Brasil";
const cidade = new String("Rio");

const listaAnimais = ["Cachorro", "Gato", "Cavalo"];

const Carro = {
  marca: "Ford",
  preco: 2000,
  andar() {
    return true;
  },
};
