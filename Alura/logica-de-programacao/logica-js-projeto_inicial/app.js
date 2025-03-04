alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt('escolha um número de 1 a 100');

    if(chute == numeroSecreto){
        alert('parabéns você acertou');
        break;
    }
    else{
        if(chute < numeroSecreto){
            alert("o número secreto é maior");
        }
        else{
            alert("O número secreto é menor");
        }
    }
    numeroTentativas++
}
let numeroTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`o número secreto é ${numeroSecreto} com ${numeroTentativas} ${numeroTentativas}`); 
