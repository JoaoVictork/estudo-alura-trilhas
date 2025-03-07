alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt(`escolha um número de 1 a ${numeroMaximo}`);

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
