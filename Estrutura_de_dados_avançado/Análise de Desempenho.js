function testarPerformance() {
  const dados = Array.from({ length: 10000 }, () =>
    Math.floor(Math.random() * 100000)
  );

  const btree = new BTree(3);

  console.time("Inserção B-Tree");
  dados.forEach(v => btree.inserir(v));
  console.timeEnd("Inserção B-Tree");

  console.time("Busca B-Tree");
  dados.forEach(v => btree.buscar(btree.raiz, v));
  console.timeEnd("Busca B-Tree");
}

testarPerformance();