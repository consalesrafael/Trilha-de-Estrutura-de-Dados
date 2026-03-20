function buscaForcaBruta(texto, padrao) {
  let posicoes = [];

  for (let i = 0; i <= texto.length - padrao.length; i++) {
    let j = 0;

    while (j < padrao.length && texto[i + j] === padrao[j]) {
      j++;
    }

    if (j === padrao.length) {
      posicoes.push(i);
    }
  }

  return posicoes;
}
function construirLPS(padrao) {
  let lps = Array(padrao.length).fill(0);
  let len = 0;
  let i = 1;

  while (i < padrao.length) {
    if (padrao[i] === padrao[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;
}

function buscaKMP(texto, padrao) {
  let lps = construirLPS(padrao);
  let i = 0, j = 0;
  let posicoes = [];

  while (i < texto.length) {
    if (texto[i] === padrao[j]) {
      i++;
      j++;
    }

    if (j === padrao.length) {
      posicoes.push(i - j);
      j = lps[j - 1];
    } else if (i < texto.length && texto[i] !== padrao[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return posicoes;
}