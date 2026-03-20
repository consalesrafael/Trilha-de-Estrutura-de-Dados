function kruskal(n, arestas) {
  const uf = new UnionFind(n);
  arestas.sort((a, b) => a[2] - b[2]);

  let resultado = [];

  for (let [u, v, peso] of arestas) {
    if (uf.find(u) !== uf.find(v)) {
      uf.union(u, v);
      resultado.push([u, v, peso]);
    }
  }

  return resultado;
}
function temCiclo(n, arestas) {
  const uf = new UnionFind(n);

  for (let [u, v] of arestas) {
    if (uf.find(u) === uf.find(v)) {
      return true;
    }
    uf.union(u, v);
  }

  return false;
}