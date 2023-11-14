
const arrayExemplo = [1, 2, 3, 1, 2, 4, 5, 3, 2, 1, 5];

function contarFrequenciaElementos(array){
    const frequencia = {};

    array.forEach((elemento) => {

        if(frequencia[elemento]){
            frequencia[elemento]++;
        }else{
            frequencia[elemento] = 1;
        }

    });
    return frequencia;
}

const resultadoFrequencia = contarFrequenciaElementos(arrayExemplo);
    console.log('Frequência dos elementos:', resultadoFrequencia);