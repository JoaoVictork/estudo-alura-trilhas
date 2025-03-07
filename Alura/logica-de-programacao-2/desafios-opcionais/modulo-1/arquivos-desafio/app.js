let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function verificarConsole(){
    console.log("o botao foi clicado!");
}

function verificarAlerta(){
    alert('Eu amo JavaScript');
}

function verificaPrompt(){
    let cidade = prompt("Digite uma cidade do Brasil.");
    alert(`Estive em ${cidade} e lembrei de você <3`);
}

function verificaSoma(){
    let numero1 = parseInt(prompt('Digite um número'));
    let numero2 = parseInt(prompt('Digite outro número'));
    let soma = numero1 + numero2;
    alert(`A soma dos números é ${soma}`)
}