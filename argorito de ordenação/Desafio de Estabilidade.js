function selectionSortEstavel(arr) {
    let n = arr.length;
  
    for (let i = 0; i < n; i++) {
      let min = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j].valor < arr[min].valor) min = j;
      }
  
      
      let chave = arr[min];
      while (min > i) {
        arr[min] = arr[min - 1];
        min--;
      }
      arr[i] = chave;
    }
    return arr;
  }
  
  
  const dados = [
    { valor: 10, id: 'A' },
    { valor: 5,  id: 'B' },
    { valor: 10, id: 'C' }
  ];
  
  console.log(selectionSortEstavel(dados)); 
