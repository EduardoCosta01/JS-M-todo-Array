const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtarLivros))

function filtarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'dispinivel' ? FiltraPorDisponibilidade() : FiltrarPorCategoria(categoria)
    exibirLivrosTela(livrosFiltrados)

    if (categoria == 'dispinivel') {
        const valorTotal = CalcularValorTotalLivroDisponiveis(livrosFiltrados)
        exibirTotalLivroDisponivelTela(valorTotal)
    }
}

function FiltrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function FiltraPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirTotalLivroDisponivelTela (valorTotal) {
    elementoValorTotalLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}


