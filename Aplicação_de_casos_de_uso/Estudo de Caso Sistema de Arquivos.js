class No {
  constructor(nome) {
    this.nome = nome;
    this.filhos = {};
  }
}

class SistemaArquivos {
  constructor() {
    this.root = new No("/");
  }

  inserir(caminho) {
    let partes = caminho.split("/");
    let atual = this.root;

    for (let parte of partes) {
      if (!parte) continue;

      if (!atual.filhos[parte]) {
        atual.filhos[parte] = new No(parte);
      }

      atual = atual.filhos[parte];
    }
  }

  buscar(caminho) {
    let partes = caminho.split("/");
    let atual = this.root;

    for (let parte of partes) {
      if (!parte) continue;

      if (!atual.filhos[parte]) return false;

      atual = atual.filhos[parte];
    }

    return true;
  }
}