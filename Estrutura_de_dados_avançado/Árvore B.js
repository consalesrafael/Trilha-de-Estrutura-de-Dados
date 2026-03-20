class BTreeNode {
  constructor(t, folha = true) {
    this.t = t; // grau mínimo
    this.folha = folha;
    this.chaves = [];
    this.filhos = [];
  }
}

class BTree {
  constructor(t) {
    this.raiz = new BTreeNode(t);
    this.t = t;
  }

  buscar(no, k) {
    let i = 0;
    while (i < no.chaves.length && k > no.chaves[i]) i++;

    if (no.chaves[i] === k) return true;

    if (no.folha) return false;

    return this.buscar(no.filhos[i], k);
  }

  dividirFilho(pai, i) {
    let t = this.t;
    let y = pai.filhos[i];
    let z = new BTreeNode(t, y.folha);

    z.chaves = y.chaves.splice(t);
    let meio = y.chaves.pop();

    if (!y.folha) {
      z.filhos = y.filhos.splice(t);
    }

    pai.filhos.splice(i + 1, 0, z);
    pai.chaves.splice(i, 0, meio);
  }

  inserirNaoCheio(no, k) {
    let i = no.chaves.length - 1;

    if (no.folha) {
      no.chaves.push(0);
      while (i >= 0 && k < no.chaves[i]) {
        no.chaves[i + 1] = no.chaves[i];
        i--;
      }
      no.chaves[i + 1] = k;
    } else {
      while (i >= 0 && k < no.chaves[i]) i--;
      i++;

      if (no.filhos[i].chaves.length === 2 * this.t - 1) {
        this.dividirFilho(no, i);
        if (k > no.chaves[i]) i++;
      }

      this.inserirNaoCheio(no.filhos[i], k);
    }
  }

  inserir(k) {
    let r = this.raiz;

    if (r.chaves.length === 2 * this.t - 1) {
      let s = new BTreeNode(this.t, false);
      this.raiz = s;
      s.filhos.push(r);

      this.dividirFilho(s, 0);
      this.inserirNaoCheio(s, k);
    } else {
      this.inserirNaoCheio(r, k);
    }
  }
}