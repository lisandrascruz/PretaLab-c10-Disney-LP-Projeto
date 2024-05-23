function pegarPalpiteDigitado() {
  return parseInt(document.getElementById("palpiteDigitado").value);
}

function limparPalpiteDigitado() {
  document.getElementById("palpiteDigitado").value = null;
}

function pegarFeedback() {
  return document.getElementById("feedback");
}

function atualizarFeedback(msg) {
  const mensagemElement = document.getElementById("feedback");
  mensagemElement.textContent = msg;
}

function pegarPalpitesFalhos() {
  // to-do
}

function atualizarPalpitesFalhos(novoValor) {
  // to-do
}

function pegarPontuacao() {
  return document.getElementById("pontuacao").textContent;
}

function atualizarPontuacao(novaPontuacao) {
  const campo = document.getElementById("pontuacao");
  campo.textContent = `Você tem ${novaPontuacao} pontos`;
}