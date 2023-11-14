
const biblioteca = [
    {titulo: 'Quincas Borba', autor: 'Machado de Assis' , ano: 1891},
    {titulo: 'Crimes e Castigos', autor: 'Dostoievski' , ano: 1866},
    {titulo: '1984', autor: 'George Orwell', ano: 1949 },
];

function buscarLivroPorTitulo(livros, tituloBuscado){

    for(let i = 0;i < livros.length;i++){

        if(livros[i].titulo === tituloBuscado){

            return livros[i];

    }

    
}

return null;
}
const tituloBuscado = 'Quincas Borba';
const livroEncontrado = buscarLivroPorTitulo(biblioteca, tituloBuscado);

       if (livroEncontrado) {
         console.log('Livro encontrado:', livroEncontrado);
     } else {
         console.log('Livro não encontrado.');
                }   