    
    const palavraExemplo_1 = 'TENET';
    const palavraExemplo_2 = 'javascript';
    function verificarPalindromo(palavra) {
   
    const palavraFormatada = palavra.toLowerCase().replace(/\s/g, '');

 
    const palavraInvertida = palavraFormatada.split('').reverse().join('');

    
    return palavraFormatada === palavraInvertida;
    }

    const resultado_1 = verificarPalindromo(palavraExemplo_1);
    const resultado_2 = verificarPalindromo(palavraExemplo_2);

    console.log(`A palavra "${palavraExemplo_1}" é um palíndromo? ${resultado_1}`);
    console.log(`A palavra "${palavraExemplo_2}" é um palíndromo? ${resultado_2}`);


    