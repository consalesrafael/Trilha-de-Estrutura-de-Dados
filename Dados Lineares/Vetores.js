let array = [1,2,3,4,5,6,7,8,9,10]

const readlineSync = require('readline-sync');

function encontrar() {
    let num = readlineSync.question('Que numero quer encontrar no array? ');
    let posicao 

    for (let i = 0; i < array.length; i++) {       
        
        if (array[i] == num ) {
            posicao=i
            console.log("Encontrou o numero: ",num," e ele esta na posição: ",posicao," do array")
            return;
        }     
    }
    console.log("O numero: ",num," não existe no array")
}

function deletar(){
    let num = readlineSync.question('Que numero quer deletar no array? ');
    for (let i = 0; i < array.length; i++) {       
        
        if (array[i] == num ) {
            array.splice(i,1)
            posicao=i
            console.log("O numero: ",num," foi deletado e estava na posição: ",posicao," do array")
            return;
        }     
    }
    console.log("O numero: ",num," não existe no array")
}

encontrar()
deletar()