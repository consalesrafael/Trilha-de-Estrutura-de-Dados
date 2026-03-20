
const hashInt = (chave) => chave % 10;


const hashString = (str, tamanho = 10) => {
  let soma = 0;
  for (let i = 0; i < str.length; i++) soma += str.charCodeAt(i);
  return soma % tamanho;
};