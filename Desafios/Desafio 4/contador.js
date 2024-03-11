// contador.js
let contador = 0;

function contarClique() {
  contador++;
  atualizarContador();
}

function resetarContador() {
  contador = 0;
  atualizarContador();
}

function atualizarContador() {
  document.getElementById("contadorInfo").innerText = `O contador está com ${contador} cliques.`;
}
