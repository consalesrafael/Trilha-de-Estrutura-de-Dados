const dicionario = new HashTableChaining(20);
dicionario.inserir("Algoritmo", "Sequência lógica de instruções.");
dicionario.inserir("Hash", "Função que mapeia dados de tamanho variável.");

console.log(dicionario.buscar("Algoritmo")); 
dicionario.remover("Hash");
console.log(dicionario.buscar("Hash")); 