class NodeDuplo {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
        this.anterior = null;
    }
}

class ListaDupla {
    constructor() {
        this.head = null;
    }

    inserirInicio(valor) {
        const novo = new NodeDuplo(valor);

        if (this.head) {
            this.head.anterior = novo;
            novo.proximo = this.head;
        }

        this.head = novo;
    }

    removerFinal() {
        if (!this.head) return;

        let atual = this.head;

        while (atual.proximo) {
            atual = atual.proximo;
        }

        if (atual.anterior) {
            atual.anterior.proximo = null;
        } else {
            this.head = null;
        }
    }

    imprimir() {
        let atual = this.head;

        console.log("→ Normal");
        while (atual) {
            console.log(atual.valor);
            if (!atual.proximo) break;
            atual = atual.proximo;
        }

        console.log("← Reverso");
        while (atual) {
            console.log(atual.valor);
            atual = atual.anterior;
        }
    }
}