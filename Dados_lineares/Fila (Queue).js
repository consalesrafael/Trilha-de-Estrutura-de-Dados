class Fila {
    constructor() {
        this.itens = [];
    }

    enqueue(valor) {
        this.itens.push(valor);
    }

    dequeue() {
        return this.itens.shift();
    }
}
class FilaCircular {
    constructor(tamanho) {
        this.itens = new Array(tamanho);
        this.inicio = 0;
        this.fim = 0;
        this.tamanho = tamanho;
        this.count = 0;
    }

    enqueue(valor) {
        if (this.count === this.tamanho) return "Cheia";

        this.itens[this.fim] = valor;
        this.fim = (this.fim + 1) % this.tamanho;
        this.count++;
    }

    dequeue() {
        if (this.count === 0) return "Vazia";

        let valor = this.itens[this.inicio];
        this.inicio = (this.inicio + 1) % this.tamanho;
        this.count--;
        return valor;
    }
}