import Countdown from "./countdown.js";

const tempoParaOnatal = new Countdown("25 Decenber 2026 23:59:59 GMT-0300");
const tempoParaOAnoNovo = new Countdown("31 Decenber 2026 23:59:59 GMT-0300");

setInterval(() => {
  console.log(tempoParaOnatal.total);
}, 1000);
console.log(tempoParaOAnoNovo.total);
