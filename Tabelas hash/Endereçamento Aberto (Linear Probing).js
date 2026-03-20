class HashTableLinear {
    constructor(tamanho = 10) {
      this.tabela = new Array(tamanho);
      this.tamanho = tamanho;
    }
  
    inserir(chave, valor) {
      let idx = hashString(chave, this.tamanho);
      while (this.tabela[idx] !== undefined) {
        idx = (idx + 1) % this.tamanho; 
      }
      this.tabela[idx] = { chave, valor };
    }
  }