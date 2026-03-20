class Node {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class Lista {
    constructor() {
        this.head = null;
    }

    inserirInicio(valor) {
        const novo = new Node(valor);
        novo.proximo = this.head;
        this.head = novo;
    }

    inserirFinal(valor) {
        const novo = new Node(valor);

        if (!this.head) {
            this.head = novo;
            return;
        }

        let atual = this.head;
        while (atual.proximo) {
            atual = atual.proximo;
        }

        atual.proximo = novo;
    }

    removerPosicao(pos) {
        if (pos === 0) {
            this.head = this.head.proximo;
            return;
        }

        let atual = this.head;
        for (let i = 0; i < pos - 1; i++) {
            atual = atual.proximo;
        }

        atual.proximo = atual.proximo.proximo;
    }

    buscar(valor) {
        let atual = this.head;

        while (atual) {
            if (atual.valor === valor) return "Encontrado";
            atual = atual.proximo;
        }

        return "Não encontrado";
    }
}