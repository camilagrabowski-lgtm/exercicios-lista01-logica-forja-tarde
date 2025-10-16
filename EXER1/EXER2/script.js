function escreva() {
    // Captura os valores dos inputs
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);
    
    document.getElementById("printNome").textContent = "Nome: ${nome}"

    if (idade < 18) {
        document.getElementById("printIdade").textContent = "Menor de idade";
    } else {
        document.getElementById("printIdade").textContent = "Maior de idade";
    }

    }