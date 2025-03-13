function alterarStatus(id){
    let obterJogo = document.getElementById(`game-${id}`);
    let imagemJogo = obterJogo.querySelector('.dashboard__item__img');
    let botaoJogo = obterJogo.querySelector('.dashboard__item__button');

    if(imagemJogo.classList.contains('dashboard__item__img--rented')){
        imagemJogo.classList.remove('dashboard__item__img--rented');
        botaoJogo.classList.remove('dashboard__item__button--return')
        botaoJogo.textContent = 'Alugar';
    }
    else{
        imagemJogo.classList.add('dashboard__item__img--rented');
        botaoJogo.classList.add('dashboard__item__button--return')
        botaoJogo.textContent = 'Devolver';
    }
}