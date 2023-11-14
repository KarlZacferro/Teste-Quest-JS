    const numeroExemplo = 5;

    function calcularFatorial(numero) {

        if(numero < 0) {
            return "Não é possivel calcular o fatorial de um número negativo."
        }

        if(numero === 0) {
            return 1;
        }

        let resultado = 1;

        for(let i = 1; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;

    }

    const resultadoFatorial = calcularFatorial(numeroExemplo);
        console.log(`O fatorial de ${numeroExemplo} é: ${resultadoFatorial}`);