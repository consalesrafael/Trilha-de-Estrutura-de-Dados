function permutar(arr) {
  if (arr.length <= 1) return [arr];

  let resultado = [];
  for (let i = 0; i < arr.length; i++) {
    let restante = arr.slice(0, i).concat(arr.slice(i + 1));
    let perms = permutar(restante);

    for (let p of perms) {
      resultado.push([arr[i]].concat(p));
    }
  }
  return resultado;
}

function tspForcaBruta(distancias) {
  const cidades = Object.keys(distancias);
  const rotas = permutar(cidades.slice(1));
  let menor = Infinity;

  for (let rota of rotas) {
    let custo = 0;
    let atual = cidades[0];

    for (let cidade of rota) {
      custo += distancias[atual][cidade];
      atual = cidade;
    }

    custo += distancias[atual][cidades[0]];

    if (custo < menor) menor = custo;
  }

  return menor;
}

function tspVizinhoMaisProximo(distancias, inicio) {
  let visitados = new Set([inicio]);
  let atual = inicio;
  let custo = 0;

  while (visitados.size < Object.keys(distancias).length) {
    let menor = Infinity;
    let proximo = null;

    for (let cidade in distancias[atual]) {
      if (!visitados.has(cidade) && distancias[atual][cidade] < menor) {
        menor = distancias[atual][cidade];
        proximo = cidade;
      }
    }

    custo += menor;
    visitados.add(proximo);
    atual = proximo;
  }

  custo += distancias[atual][inicio];
  return custo;
}