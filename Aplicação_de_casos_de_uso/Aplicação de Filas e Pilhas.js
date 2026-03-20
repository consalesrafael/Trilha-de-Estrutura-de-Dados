class FilaImpressao {
  constructor() {
    this.fila = [];
  }

  adicionarDocumento(doc) {
    this.fila.push(doc);
    console.log(`Documento "${doc}" adicionado.`);
  }

  imprimir() {
    if (this.fila.length === 0) {
      console.log("Fila vazia.");
      return;
    }
    const doc = this.fila.shift();
    console.log(`Imprimindo: ${doc}`);
  }
}

// Teste
const impressora = new FilaImpressao();
impressora.adicionarDocumento("Arquivo1.pdf");
impressora.adicionarDocumento("Arquivo2.pdf");
impressora.imprimir();
impressora.imprimir();


class Navegador {
  constructor() {
    this.voltar = [];
    this.avancar = [];
    this.paginaAtual = null;
  }

  acessar(pagina) {
    if (this.paginaAtual) {
      this.voltar.push(this.paginaAtual);
    }
    this.paginaAtual = pagina;
    this.avancar = [];
    console.log(`Acessando: ${pagina}`);
  }

  voltarPagina() {
    if (this.voltar.length === 0) return;
    this.avancar.push(this.paginaAtual);
    this.paginaAtual = this.voltar.pop();
    console.log(`Voltou para: ${this.paginaAtual}`);
  }

  avancarPagina() {
    if (this.avancar.length === 0) return;
    this.voltar.push(this.paginaAtual);
    this.paginaAtual = this.avancar.pop();
    console.log(`Avançou para: ${this.paginaAtual}`);
  }
}