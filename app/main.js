let livros = []

const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBoscarLivrosAPI()

async function getBoscarLivrosAPI () {
    const res = await fetch(endpointAPI)
    livros = await res.json()
    let livrosDesconto = aplicarDesconto(livros)
    exibirLivrosTela(livrosDesconto)

}

