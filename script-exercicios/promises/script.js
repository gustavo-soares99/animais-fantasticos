// const promessa = new Promise((resolve, reject) => {
//   let condicao = true;
//   if (condicao) {
//     setTimeout(() => {
//       resolve({ nome: "João", idade: 30 });
//     }, 1000);
//   } else {
//     reject(Error("Um erro ocorreu na promise"));
//   }
// });

// const retorno = promessa
//   .then((resolucao) => {
//     console.log(resolucao);
//     resolucao.profissao = "Designer";
//     return resolucao;
//   })
//   .then((resolucao) => console.log(resolucao))
//   .catch((rejeitado) => {
//     console.log(rejeitado);
//   })
//   .finally(() => {
//     console.log("Acabou");
//   });

// console.log(retorno);

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuario Logado");
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados Carregados");
  }, 1500);
});

const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolucao) => {
  console.log(resolucao);
});
