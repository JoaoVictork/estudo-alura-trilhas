let notaAluno = parseFloat(prompt("Digite a nota do aluno."));

if(notaAluno >= 7 && notaAluno <= 10){
    alert("Aluno aprovado.");
}
else if(notaAluno >= 0 && notaAluno < 7){
    alert("Aluno reprovado.");
}
else{
    alert("Nota inválida.");
}