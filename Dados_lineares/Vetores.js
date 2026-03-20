const teste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const seuNumero = 10;
const posicao = 4;

function buscarnumero(seuNumero){
    for(let x=0; x < teste.length; x++){
        if(seuNumero == teste[x]){
            console.log('Este é seu numero: ', seuNumero)
            break
        }
    }
    if(seuNumero >=11 || seuNumero <1){
        console.log('Numero invalido! ')
    }
}

function apresenta(posicao){

    console.log('Este é o vetor atual:');
    console.log(teste);

    if(posicao >= 0 && posicao < teste.length){
        teste.splice(posicao, 1);
        console.log('Vetor após remover posição', posicao, ':');
        console.log(teste);
    } else {
        console.log('Posição inválida!');
    }
}


buscarnumero(seuNumero);
apresenta(posicao)