class HashTableChaining {
    constructor(tamanho = 10) {
      this.tabela = new Array(tamanho).fill(null).map(() => []);
    }
  
    inserir(chave, valor) {
      const idx = hashString(chave, this.tabela.length);
      this.tabela[idx].push({ chave, valor });
    }
  
    buscar(chave) {
      const idx = hashString(chave, this.tabela.length);
      const item = this.tabela[idx].find(i => i.chave === chave);
      return item ? item.valor : null;
    }
  
    remover(chave) {
      const idx = hashString(chave, this.tabela.length);
      this.tabela[idx] = this.tabela[idx].filter(i => i.chave !== chave);
    }
  }