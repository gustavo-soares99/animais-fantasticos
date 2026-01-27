fetch("./dados.json")
  .then((r) => r.json())
  .then((json) => console.log(json));

const configuracoes = {
  player: "Google",
  tempo: 22.5,
  aula: "2.1 Javascript",
};

const stringConfig = JSON.stringify(configuracoes);
console.log(stringConfig);
