let lista = [64, 25, 12, 22, 11, 38, 5, 47, 3, 15];
let comp = 0, trocas = 0;

for (let i = 0; i < lista.length; i++) {
  let min = i;
  for (let j = i + 1; j < lista.length; j++) {
    comp++;
    if (lista[j] < lista[min]) min = j;
  }
  if (min !== i) {
    [lista[i], lista[min]] = [lista[min], lista[i]];
    trocas++;
  }
}
