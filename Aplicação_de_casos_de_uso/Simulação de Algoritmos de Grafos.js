class Grafo {
  constructor() {
    this.lista = {};
  }

  adicionarUsuario(usuario) {
    if (!this.lista[usuario]) {
      this.lista[usuario] = [];
    }
  }

  adicionarAmizade(u1, u2) {
    this.lista[u1].push(u2);
    this.lista[u2].push(u1);
  }

  bfs(inicio, destino) {
    let fila = [[inicio, 0]];
    let visitados = new Set();

    while (fila.length > 0) {
      let [atual, distancia] = fila.shift();

      if (atual === destino) return distancia;

      visitados.add(atual);

      for (let vizinho of this.lista[atual]) {
        if (!visitados.has(vizinho)) {
          fila.push([vizinho, distancia + 1]);
        }
      }
    }

    return -1;
  }
}