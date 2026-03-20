class MaxHeap {
  constructor() {
    this.heap = [];
  }

  inserir(valor) {
    this.heap.push(valor);
    this.subir();
  }

  subir() {
    let i = this.heap.length - 1;

    while (i > 0) {
      let pai = Math.floor((i - 1) / 2);

      if (this.heap[pai] >= this.heap[i]) break;

      [this.heap[pai], this.heap[i]] = [this.heap[i], this.heap[pai]];
      i = pai;
    }
  }

  remover() {
    if (this.heap.length === 1) return this.heap.pop();

    const topo = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.descer();

    return topo;
  }

  descer() {
    let i = 0;
    let n = this.heap.length;

    while (true) {
      let maior = i;
      let esq = 2 * i + 1;
      let dir = 2 * i + 2;

      if (esq < n && this.heap[esq] > this.heap[maior]) maior = esq;
      if (dir < n && this.heap[dir] > this.heap[maior]) maior = dir;

      if (maior === i) break;

      [this.heap[i], this.heap[maior]] = [this.heap[maior], this.heap[i]];
      i = maior;
    }
  }
}