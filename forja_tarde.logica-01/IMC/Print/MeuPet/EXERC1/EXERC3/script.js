function escreva() {
    const nome = document.getElementById("Nome").value;
    const idade = parseFloat(document.getElementById("Idade").value);

    document.getElementById("printNome").textContent = `Nome: ${nome}`;

    if (idade < 18) {
        document.getElementById("printIdade").textContent = `Menor de idade`;
    } else {
        document.getElementById("printIdade").textContent = `Maior de idade`;
    }
}

function calcularMedia() {
    const n1 = parseFloat(document.getElementById("nota1").value);
    const n2 = parseFloat(document.getElementById("nota2").value);
    const n3 = parseFloat(document.getElementById("nota3").value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        document.getElementById("resultadoMedia").textContent = "Por favor, insira todas as notas.";
        return;
    }

    const media = (n1 + n2 + n3) / 3;
    const status = media >= 7 ? "APROVADO" : "REPROVADO";

    document.getElementById("resultadoMedia").textContent = `Média: ${media.toFixed(2)} - ${status}`;
}
