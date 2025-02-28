alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 4;
console.log(numeroSecreto)
let chute = prompt('escolha um número de 1 a 10');

if(chute == numeroSecreto){
    alert('parabéns você acertou')
    alert(`o número secreto é ${numeroSecreto}`);
}
else{
    alert('você errou :(')
}