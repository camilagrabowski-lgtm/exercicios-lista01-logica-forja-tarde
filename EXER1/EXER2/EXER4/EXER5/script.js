function mostrarDados() {
  const nome = document.getElementById("nome").value;
  const descricao = document.getElementById("descricao").value;
  const idade = document.getElementById("idade").value;
  const genero = document.getElementById("genero").value;
  const hobby = document.getElementById("hobby").value;

  if (!nome || !descricao || !idade || !genero || !hobby) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  const resultado = `
    <h2>Dados do Usuário:</h2>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Descrição:</strong> ${descricao}</p>
    <p><strong>Idade:</strong> ${idade}</p>
    <p><strong>Gênero:</strong> ${genero}</p>
    <p><strong>Hobby preferido:</strong> ${hobby}</p>
  `;

  document.getElementById("resultado").innerHTML = resultado;
}