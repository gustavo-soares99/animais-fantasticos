function perimetroForma(lado, totalLados = 4){

  const argArray = Array.from(arguments)
  console.log(arguments)
  return lado * totalLados
}
perimetroForma(10, 4)
// perimetroForma(10)

// console.log(perimetroForma(10, 3))

// function anunciarGanhadores(premio, ...ganhadores){
//   ganhadores.forEach((ganhador) => {
//     console.log(ganhador + " Ganhou um " + premio )
//   })
// }
// anunciarGanhadores("Carro", "Pedro", "Marta", "Paulo")

const frutas = ["Banana", "Uva", "Morango"];
const legumes = ["Cenoura", "Batata"]

const comidas = [...frutas, ...legumes]
console.log(comidas)

const todosOsNumeros = [1,2,3,4,5,6,7,8,9,10,11,21,23]

const numeroMaximo = Math.max(...todosOsNumeros)
console.log(numeroMaximo)


const btns = document.querySelectorAll("button")

console.log(btns)

const btnArrays = [...btns]
console.log(btnArrays)