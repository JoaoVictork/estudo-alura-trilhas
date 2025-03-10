let numeroSecreto = gerarNumeroSecreto();

escreverTexto('h1', 'Hora do Desafio');
escreverTexto('p', 'vamos começar');

function escreverTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute(){
    console.log("o botao foi clicado!");
}

function gerarNumeroSecreto(){
    return parseInt(Math.random() * 10 + 1);
}