
    const arrayComRepeticao = [1, 2, 2, 3, 4, 4, 5];
    function removerRepeticao(array) {

    const arraySemRepeticao = [...new Set(array)];


    return arraySemRepeticao;
}

    const arraySemRepeticao = removerRepeticao(arrayComRepeticao);

    console.log('Array Sem Duplicatas:', arraySemRepeticao);
    console.log('Array Original:', arrayComRepeticao);
