let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você acertou com ${tentativas} ${palavraTentativas}`;

    if(chute == numeroSecreto){
        escreverTexto('h1','Você acertou');
        escreverTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(chute > numeroSecreto){
            escreverTexto('p','o número é menor, tente novamente.');
            limparCampo();  
        }
        else{
            escreverTexto('p','o número é maior, tente novamente.');
            limparCampo();
        }
        tentativas++
    }
}

function escreverTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumeroSecreto(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeNumerosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        numeroEscolhido = parseInt(Math.random() * 10 + 1);
    }
    else{
        listaDeNumerosSorteados.push(numeroEscolhido)
    }
    return numeroEscolhido;
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensagemInicial(){
    escreverTexto('h1', 'Hora do Desafio');
    escreverTexto('p', 'digite um número de 1 a 10');
}