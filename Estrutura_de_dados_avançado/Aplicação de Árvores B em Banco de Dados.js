class BancoSimulado {
  constructor() {
    this.indice = new BTree(3);
    this.dados = {};
  }

  inserir(id, valor) {
    this.indice.inserir(id);
    this.dados[id] = valor;
  }

  buscar(id) {
    if (this.indice.buscar(this.indice.raiz, id)) {
      return this.dados[id];
    }
    return null;
  }
}