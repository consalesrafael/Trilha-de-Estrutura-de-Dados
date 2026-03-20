class Node {
  constructor(valor) {
    this.valor = valor;
    this.esq = null;
    this.dir = null;
  }
}

class ArvoreBinaria {
  constructor() {
    this.raiz = null;
  }

  inserir(valor) {
    const novo = new Node(valor);
    if (!this.raiz) {
      this.raiz = novo;
      return;
    }

    let atual = this.raiz;
    while (true) {
      if (valor < atual.valor) {
        if (!atual.esq) {
          atual.esq = novo;
          return;
        }
        atual = atual.esq;
      } else {
        if (!atual.dir) {
          atual.dir = novo;
          return;
        }
        atual = atual.dir;
      }
    }
  }


  inOrder(no = this.raiz) {
    if (no) {
      this.inOrder(no.esq);
      console.log(no.valor);
      this.inOrder(no.dir);
    }
  }

  preOrder(no = this.raiz) {
    if (no) {
      console.log(no.valor);
      this.preOrder(no.esq);
      this.preOrder(no.dir);
    }
  }

  
  postOrder(no = this.raiz) {
    if (no) {
      this.postOrder(no.esq);
      this.postOrder(no.dir);
      console.log(no.valor);
    }
  }
}

buscar(valor, no = this.raiz) {
  if (!no) return null;
  if (valor === no.valor) return no;

  if (valor < no.valor) return this.buscar(valor, no.esq);
  else return this.buscar(valor, no.dir);
}

remover(no, valor) {
  if (!no) return null;

  if (valor < no.valor) {
    no.esq = this.remover(no.esq, valor);
  } else if (valor > no.valor) {
    no.dir = this.remover(no.dir, valor);
  } else {
    
    if (!no.esq) return no.dir;
    if (!no.dir) return no.esq;

    let menor = this.min(no.dir);
    no.valor = menor.valor;
    no.dir = this.remover(no.dir, menor.valor);
  }

  return no;
}

min(no) {
  while (no.esq) no = no.esq;
  return no;
}