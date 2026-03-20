class Grafo {
  constructor() {
    this.lista = {};
  }

  adicionarVertice(v) {
    this.lista[v] = [];
  }

  adicionarAresta(v1, v2) {
    this.lista[v1].push(v2);
    this.lista[v2].push(v1); // remover se for direcionado
  }
}
dfs(inicio, visitados = new Set()) {
  console.log(inicio);
  visitados.add(inicio);

  for (let vizinho of this.lista[inicio]) {
    if (!visitados.has(vizinho)) {
      this.dfs(vizinho, visitados);
    }
  }
}
bfs(inicio) {
  let fila = [inicio];
  let visitados = new Set([inicio]);

  while (fila.length) {
    let atual = fila.shift();
    console.log(atual);

    for (let vizinho of this.lista[atual]) {
      if (!visitados.has(vizinho)) {
        visitados.add(vizinho);
        fila.push(vizinho);
      }
    }
  }
}