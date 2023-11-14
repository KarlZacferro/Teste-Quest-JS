    
    const stringExemplo = 'Hello';

    function inverterString(str) {

        const arrayDeCaracteres = str.split('');

        const arrayInvertido = arrayDeCaracteres.reverse();

        const stringInvertida = arrayInvertido.join('');

        return stringInvertida;
    }

    const resultado = inverterString(stringExemplo);
        console.log(`A string "${stringExemplo}" invertida é: "${resultado}"`);