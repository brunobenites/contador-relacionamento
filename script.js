// Data de início do relacionamento (05/07/2024 às 19h00)
const dataInicio = new Date('2024-07-05T19:00:00');

// Função que calcula o tempo desde a data de início
function calcularTempo() {
    const agora = new Date();
    const tempo = agora - dataInicio;

    // Calculando o tempo em anos, meses e dias
    const anos = Math.floor(tempo / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((tempo % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((tempo % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

    // Atualizando o resultado no HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Já se passaram ${anos} anos, ${meses} meses e ${dias} dias desde o início do nosso relacionamento!`;
}

// Chama a função quando a página carrega
window.onload = calcularTempo;
