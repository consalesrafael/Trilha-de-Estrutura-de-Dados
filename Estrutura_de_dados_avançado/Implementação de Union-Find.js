class UnionFind {
  constructor(n) {
    this.parent = Array(n).fill(0).map((_, i) => i);
    this.rank = Array(n).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // path compression
    }
    return this.parent[x];
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }
}
function componentes(n, arestas) {
  const uf = new UnionFind(n);

  for (let [u, v] of arestas) {
    uf.union(u, v);
  }

  const grupos = {};
  for (let i = 0; i < n; i++) {
    let raiz = uf.find(i);
    if (!grupos[raiz]) grupos[raiz] = [];
    grupos[raiz].push(i);
  }

  return grupos;
}