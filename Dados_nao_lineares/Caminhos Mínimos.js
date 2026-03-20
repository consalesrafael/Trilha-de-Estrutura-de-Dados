dijkstra(grafo, inicio) {
  let dist = {};
  let visitados = new Set();

  for (let v in grafo) dist[v] = Infinity;
  dist[inicio] = 0;

  while (true) {
    let menor = null;

    for (let v in dist) {
      if (!visitados.has(v) && (menor === null || dist[v] < dist[menor])) {
        menor = v;
      }
    }

    if (menor === null) break;

    visitados.add(menor);

    for (let vizinho in grafo[menor]) {
      let novaDist = dist[menor] + grafo[menor][vizinho];

      if (novaDist < dist[vizinho]) {
        dist[vizinho] = novaDist;
      }
    }
  }

  return dist;
}

function floydWarshall(matriz) {
  let n = matriz.length;

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        matriz[i][j] = Math.min(
          matriz[i][j],
          matriz[i][k] + matriz[k][j]
        );
      }
    }
  }

  return matriz;
}