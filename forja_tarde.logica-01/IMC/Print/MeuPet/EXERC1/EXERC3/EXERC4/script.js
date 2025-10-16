function calcularArea() {
    const lado = parseFloat(document.getElementById("lado").value);

    if (isNaN(lado) || lado <= 0) {
        document.getElementById("resultadoArea").textContent = "Digite um valor válido para o lado.";
        return;
    }

    const area = lado * lado;
    document.getElementById("resultadoArea").textContent = `Área do quadrado: ${area.toFixed(2)} m²`;
}
