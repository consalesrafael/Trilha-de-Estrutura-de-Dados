let nomes = ["Zebra", "Arroz", "Baleia", "Dado", "Carro"];
for (let i = 1; i < nomes.length; i++) {
  let chave = nomes[i];
  let j = i - 1;
  while (j >= 0 && nomes[j].localeCompare(chave) > 0) {
    nomes[j + 1] = nomes[j];
    j--;
  }
  nomes[j + 1] = chave;
}