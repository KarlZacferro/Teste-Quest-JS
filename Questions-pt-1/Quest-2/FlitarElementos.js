
const listaDeProdutos = [
    { nome: 'Produto_A', preco: 25.5, estoque: 10 },
    { nome: 'Produto_B', preco: 30.0, estoque: 15 },
    { nome: 'Produto_C', preco: 15.75, estoque: 20 },
    { nome: 'Produto_D', preco: 40.2, estoque: 5 },
];

const valorMinimoFiltro = 30.0
function filtrarProdutosPorPreco( produtos, valorMinimo) {

    const produtosFiltrados = produtos.filter((produto) =>{

        return produto.preco > valorMinimo;
    });

    return produtosFiltrados;
}

const produtosFiltrados = filtrarProdutosPorPreco(listaDeProdutos, valorMinimoFiltro);
        console.log('Produtos com preço superior a', valorMinimoFiltro, ':', produtosFiltrados);