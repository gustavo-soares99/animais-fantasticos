async function puxarDados() {
  const promiseDados = await fetch("./dados.json");
  const responseClientes = await fetch("./clientes.json");

  const jsonDados = await responseDados.json();
  document.body.innerText = jsonDados.aula;
}

puxarDados();
