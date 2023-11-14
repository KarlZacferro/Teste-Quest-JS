
    const numeroExemplo = 17;

    function verificarPrimo(numero){

    if(numero <= 1){
        return false;
    }

    for(let i = 2; i <= Math.sqrt(numero); i++){
        if(numero % i === 0){

            return false
        }
    }

    return true
}

    const resultado = verificarPrimo(numeroExemplo);
        console.log(`O número ${numeroExemplo} é primo ? ${resultado}`);