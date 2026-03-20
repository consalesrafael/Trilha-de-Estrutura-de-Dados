class BenchmarkHash {
    constructor(tamanho) {
      this.tamanho = tamanho;
      this.chaining = new Array(tamanho).fill(null).map(() => []);
      this.linear = new Array(tamanho).fill(null);
    }
  
    hash(key) {
      let h = 0;
      for (let i = 0; i < key.length; i++) h += key.charCodeAt(i);
      return h % this.tamanho;
    }
  
    testChaining(dados) {
      const inicio = performance.now();
      dados.forEach(d => {
        const idx = this.hash(d.k);
        this.chaining[idx].push(d);
      });
      return performance.now() - inicio;
    }
  
    testLinear(dados) {
      const inicio = performance.now();
      dados.forEach(d => {
        let idx = this.hash(d.k);
        while (this.linear[idx] !== null) {
          idx = (idx + 1) % this.tamanho;
        }
        this.linear[idx] = d;
      });
      return performance.now() - inicio;
    }
  }
  
  
  const dados = Array.from({ length: 750 }, (_, i) => ({ k: `chave${i}`, v: i }));
  const benchmark = new BenchmarkHash(1000); // Load Factor 0.75
  
  console.log(`Chaining: ${benchmark.testChaining(dados).toFixed(4)}ms`);
  console.log(`Linear Probing: ${benchmark.testLinear(dados).toFixed(4)}ms`);