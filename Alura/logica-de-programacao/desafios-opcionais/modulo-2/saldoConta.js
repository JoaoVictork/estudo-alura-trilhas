let saldo = parseFloat(prompt("Qual o saldo da conta?"))
if(saldo >= 0){
    console.log(`O seu saldo é:${saldo}`)
}
else{
    console.log("Saldo inválido.")
}