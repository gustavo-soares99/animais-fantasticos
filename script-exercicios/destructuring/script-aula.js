// // const carro = {
// //   marca: "Honda"
// //   ,ano: 2018,
// //   rodas: 4
// // }

// // const {marca, ano, rodas} = carro

// // console.log(marca, ano, rodas)

// const cliente = {
//   nome: "André",
//   compras: {
//     digitais: {
//       livros: ["Livro 1", "Livro 2"],
//       videos: ["Vídeo 35", "Vídeo HTML"]
//     },
//     fisicas: {
//       cadernos: ["Caderno 1"]
//     }
//   }
// }

// const {livros, videos} = cliente.compras.digitais

// const {digitais, fisicas, digitais: {livros, videos}} = cliente.compras


// const frutas = ["Banana", "Uva", "Morango"]

// const [primeira, segunda, terceira] = frutas

// console.log(frutas[0], primeira, segunda, terceira)

// const [primeiro, seugndo, terceiro] = ["Item1", "Item2", "Item3"]


function handleKeyboard({key, keyCode}){
  console.log(key, keyCode)
}

document.addEventListener("keyup", handleKeyboard)