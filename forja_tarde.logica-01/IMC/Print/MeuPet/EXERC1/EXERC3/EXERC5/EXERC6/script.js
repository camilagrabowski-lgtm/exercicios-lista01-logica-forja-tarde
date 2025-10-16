function calcularSomaMenosCinco() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("resultadoCalculo").textContent = "Por favor, preencha os dois números corretamente.";
        return;
    }

    const soma = n1 + n2;
    const resultado = soma - 5;

    document.getElementById("resultadoCalculo").textContent = `Resultado final: ${resultado}`;
}
