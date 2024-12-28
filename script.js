function calcularTempo() {
    // Pega a data inserida pelo usuário
    var dataInicio = document.getElementById("startDate").value;

    // Verifica se o campo não está vazio
    if (!dataInicio) {
        alert("Por favor, insira uma data válida.");
        return;
    }

    // Converte a data para um objeto Date
    var dataInicioObj = new Date(dataInicio);

    // Pega a data atual
    var dataAtual = new Date();

    // Calcula a diferença entre as datas
    var diferenca = dataAtual - dataInicioObj;

    // Converte a diferença para dias
    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    var anos = Math.floor(dias / 365);
    dias = dias % 365;
    var meses = Math.floor(dias / 30);
    dias = dias % 30;

    // Exibe o resultado
    document.getElementById("resultado").innerHTML = `Vocês estão juntos há ${anos} anos, ${meses} meses e ${dias} dias.`;
}
