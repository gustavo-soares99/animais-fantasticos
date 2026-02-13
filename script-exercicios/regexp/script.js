// const regexp = /\w+/gi;

// const regexp1 = new RegExp("//w+", "gi")

// const frase = "JavaScript Linguagem 101";
// console.log(frase.replace(regexp1, "x"))

// const regexp = /Java/g;

// const frase = "JavaScript e Java Linguagem 101";

// // console.log(regexp.test(frase))

// while(regexp.test(frase)){
//   console.log("Teste")
// }

// let regexpResult;
// while( (regexpResult = regexp.exec(frase)) !== null){
//   console.log(regexpResult[0])
// }

// const frase = "JavaScript, TypeScript,  CoffeeScript, Java";

// const regexp = /\w+/g;

// const resultados = frase.match(regexp)

// console.log(resultados)

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

const regexp = /(?<=<\/?)\w+/g;

const resultado = tags.replace(regexp, "div")
console.log(resultado)


const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;

emails.replace(/(\w+@)[\w.]+/g, '$1gmail.com');
// empresa@gmail.com
// contato@gmail.com
// suporte@gmail.com
