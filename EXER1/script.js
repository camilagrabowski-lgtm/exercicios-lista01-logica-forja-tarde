function mostrarNome() {
    const nome = document.getElementById("nomeUsuario").value;
    const areaExibicao = document.getElementById("nomeExibido");

    if (nome.trim() === "") {
        areaExibicao.textContent = "Por favor, digite um nome válido.";
    } else {
        areaExibicao.textContent = nomeUsuario;
    }
}