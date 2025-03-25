
function adicionar(){
    let item = document.getElementById('produto').value;
    let nomeProduto = item.split('-')[0];
    let valorProduto = item.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    alert(nomeProduto);
    alert(valorProduto);
    alert(quantidade);
    let preco = valorProduto * quantidade;
    alert(preco);
}

function limpar(){

}