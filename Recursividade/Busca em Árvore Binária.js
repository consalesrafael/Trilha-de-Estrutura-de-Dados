const buscarBST = (no, valor) => {
    if (!no || no.valor === valor) return no;
    return valor < no.valor ? buscarBST(no.esq, valor) : buscarBST(no.dir, valor);
  };