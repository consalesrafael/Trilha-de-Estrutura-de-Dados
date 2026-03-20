class Pilha {
    constructor(tamanho) {
        this.itens = [];
        this.tamanho = tamanho;
    }

    push(valor) {
        if (this.estaCheia()) return "Pilha cheia";
        this.itens.push(valor);
    }

    pop() {
        if (this.estaVazia()) return "Pilha vazia";
        return this.itens.pop();
    }

    estaVazia() {
        return this.itens.length === 0;
    }

    estaCheia() {
        return this.itens.length === this.tamanho;
    }
}

function verificar(expressao) {
    const pilha = [];

    for (let char of expressao) {
        if (char === "(") {
            pilha.push(char);
        } else if (char === ")") {
            if (pilha.length === 0) return "Erro";
            pilha.pop();
        }
    }

    return pilha.length === 0 ? "Correto" : "Erro";
}

console.log(verificar("((1+2)*(3/4))"));