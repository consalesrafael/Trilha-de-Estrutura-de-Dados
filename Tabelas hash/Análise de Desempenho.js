function analisarTamanho(capacidade) {
    const tabela = new Array(capacidade).fill(null).map(() => []);
    const inserir = (k) => {
      const idx = k % capacidade;
      tabela[idx].push(k);
    };
  
    const buscar = (k) => {
      const idx = k % capacidade;
      return tabela[idx].includes(k);
    };
  
    
    for (let i = 0; i < 500; i++) inserir(i);
  
    
    const inicio = performance.now();
    for (let i = 0; i < 500; i++) buscar(i);
    const fim = performance.now();
  
    return {
      tamanho: capacidade,
      loadFactor: (500 / capacidade).toFixed(2),
      tempoMedioBusca: ((fim - inicio) / 500).toFixed(6) + "ms"
    };
  }
  
  const resultados = [50, 100, 250].map(analisarTamanho);
  console.table(resultados);