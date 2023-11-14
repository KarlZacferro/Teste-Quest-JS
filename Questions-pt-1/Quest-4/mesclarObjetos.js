
const objeto_1 = { a: 1, b: 2, c: 3 };
const objeto_2 = { b: 4, c: 5, d: 6, e:1 };

function mesclarObjetos(objeto_1, objeto_2) {

    const objetoMesclado = {};
   
    for (let Key in objeto_1) {
        objetoMesclado[Key] = objeto_1[Key];
}
    for (let Key in objeto_2) {
        objetoMesclado[Key] = objeto_2[Key];
}
    return objetoMesclado;
}

    const objetoMesclado = mesclarObjetos(objeto_1, objeto_2);
        console.log('Objeto Mesclado com Sucesso:', objetoMesclado)