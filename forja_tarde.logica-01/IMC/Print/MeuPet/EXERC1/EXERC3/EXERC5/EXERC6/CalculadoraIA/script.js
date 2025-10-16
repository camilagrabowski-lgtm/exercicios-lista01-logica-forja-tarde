function adicionar(valor) {
  document.getElementById('display').value += valor;
}

function limpar() {
  document.getElementById('display').value = '';
}

function calcular() {
  const expressao = document.getElementById('display').value;
  try {
    const resultado = eval(expressao);
    document.getElementById('display').value = resultado;
  } catch (erro) {
    document.getElementById('display').value = 'Erro';
  }
}
