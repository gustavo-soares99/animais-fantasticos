// const btn = document.querySelector("button");

// btn.addEventListener("click", handleClick);

// function handleClick() {
//   setTimeout(() => {
//     this.classList.add("active");
//   }, 1000);
// }

// function espera(texto) {
//   console.log(texto);
// }

// setTimeout(espera, 3000, "Passou 2s");
// setTimeout(() => {
//   console.log("Teste");
// }, 2000);

// for (let i = 0; 1 < 20; i++) {
//   setTimeout(() => {
//     console.log(i)
//   },1000 * i)
// }

// function loop(texto) {
//   console.log(texto);
// }

// setInterval(loop, 1000, "Passou 1s");

let i = 0;
const meuLoop = setInterval(() => {
  console.log(i++);
  if (i > 20) {
    clearInterval(meuLoop);
  }
}, 200);
