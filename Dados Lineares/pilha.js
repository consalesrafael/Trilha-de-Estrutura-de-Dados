class Pilha {
    constructor(tamanho) { this.itens = []; this.max = tamanho; }
  
    vazia() { return this.itens.length === 0; }
    cheia() { return this.itens.length === this.max; }
    push(v) { if (!this.cheia()) this.itens.push(v); }
    pop() { return this.itens.pop(); }
  }
  
  
  function balanceado(exp) {
    let p = new Pilha(exp.length);
    for (let char of exp) {
      if (char === "(") p.push("(");
      else if (char === ")") {
        if (p.vazia()) return false;
        p.pop();
      }
    }
    return p.vazia();
  }