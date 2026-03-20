const { performance } = require('perf_hooks');

function benchmark(tamanho) {
  const original = Array.from({ length: tamanho }, () => Math.floor(Math.random() * tamanho));

  const testar = (nome, func) => {
    const arr = [...original];
    const inicio = performance.now();
    func(arr);
    const fim = performance.now();
    console.log(`${nome} (${tamanho} itens): ${(fim - inicio).toFixed(4)}ms`);
  };

  testar("Quick Sort", (a) => a.sort((x, y) => x - y)); 
  testar("Merge Sort", mergeSort); 
}

[100, 1000, 10000].forEach(benchmark);