class BPlusNode {
  constructor(folha = false) {
    this.folha = folha;
    this.chaves = [];
    this.filhos = [];
    this.proximo = null; // ligação entre folhas
  }
}

class BPlusTree {
  constructor(ordem = 2) {
    this.raiz = new BPlusNode(true);
    this.ordem = ordem;
  }

  inserir(valor) {
    let folha = this._encontrarFolha(this.raiz, valor);
    this._inserirNaFolha(folha, valor);

    if (folha.chaves.length > 2 * this.ordem) {
      this._split(folha);
    }
  }

  _encontrarFolha(no, valor) {
    if (no.folha) return no;

    let i = 0;
    while (i < no.chaves.length && valor >= no.chaves[i]) i++;
    return this._encontrarFolha(no.filhos[i], valor);
  }

  _inserirNaFolha(no, valor) {
    no.chaves.push(valor);
    no.chaves.sort((a, b) => a - b);
  }

  _split(no) {
    let meio = Math.floor(no.chaves.length / 2);
    let novo = new BPlusNode(no.folha);

    novo.chaves = no.chaves.splice(meio);

    if (no.folha) {
      novo.proximo = no.proximo;
      no.proximo = novo;
    }

    if (no === this.raiz) {
      let novaRaiz = new BPlusNode(false);
      novaRaiz.chaves = [novo.chaves[0]];
      novaRaiz.filhos = [no, novo];
      this.raiz = novaRaiz;
    }
  }
}