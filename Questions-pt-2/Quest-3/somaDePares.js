
    const arrayExemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function somaNumerosPares(array) {
            let soma = 0;

        for(let i = 0; i < array.length; i++) {
            if(array[i] % 2 === 0) {
                soma += array[i];
            }

        }
        return soma;
    }

    const resultado = somaNumerosPares(arrayExemplo);    
        console.log(`A soma dos números pares no array é ${resultado}`);