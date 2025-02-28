let chuteUsuario = 0;
let contador = 1;
let pontuacao = 0;

alert("Bem-vindo ao jogo da adivinhação, será sorteado um número de 0 a 5 em 3 rodadas, cada vez que você acertar o número ganha 50 pontos e vence se fizer 100 pontos.")

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

while(contador <= 3){
    let numeroSecreto = getRandomInt(0,5);
    chuteUsuario = parseInt(prompt("Digite um número de 0 a 5."));

    if(chuteUsuario === numeroSecreto){
        alert("Você acertou!")
        pontuacao = pontuacao + 50;
    }
    else{
        alert("Você errou.")
    }
    contador++
}
alert(`A sua pontuação final foi:${pontuacao}`)
if(pontuacao >= 100){
    alert("Parabéns, você venceu!")
}
else{
    alert("Que pena, você perdeu. :(")
}