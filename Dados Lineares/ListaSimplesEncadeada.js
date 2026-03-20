class No{
    constructor(value){
        this.value = value,
        this.next = null
   }
}

class ListaEncadeada{
    constructor(){
      this.head = null
    }

    adicionaInicio(value){
        let novoNo = new No(value)
        novoNo.next = this.head
        this.head = novoNo
    }
    
    adicionaFinal(value){
        let novoNo = new No(value)
        let atual = this.head
        while(atual.next != null){
           atual = atual.next
        }
        atual.next = novoNo
    }

    mostrarLista(){
        let atual = this.head
        while(atual != null){
            console.log(atual.value+"-->")
            atual = atual.next
        }
    }

    removePosicao(value){
        let atual = this.head
        let contador = 0
        let anterior = null

        if(value === 0){
            this.head = this.head.next
            return
        }
        while(contador < value ){
            anterior = atual
            atual = atual.next
            contador++
        }
        anterior.next = atual.next
    }

    buscarValor(value){
         let atual = this.head
         let contador = 0
         while(atual.value != value){
            atual = atual.next
            contador++
         }
         console.log("O numero: ",value," Esta na posição: ",contador)
         
    }
}

let listaEncadeada = new ListaEncadeada()
//Adionando valores
//---------------------------------
listaEncadeada.adicionaInicio(10)
listaEncadeada.adicionaInicio(123)
listaEncadeada.adicionaInicio(1233)
listaEncadeada.adicionaFinal(1)
//---------------------------------

//Removendo posição
//----------------------------------
  listaEncadeada.removePosicao(0)
//------------------------------------

//pesquisa valor
//------------------------------------
 listaEncadeada.buscarValor(123)
//-----------------------------------
listaEncadeada.mostrarLista()
