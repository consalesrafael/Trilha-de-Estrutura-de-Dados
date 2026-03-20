function bubbleSort(arr) {
    let n = arr.length;
    let trocas = 0;
    let comparacoes = 0;
  
    for (let i = 0; i < n; i++) {
      let houveTroca = false; 
      for (let j = 0; j < n - i - 1; j++) {
        comparacoes++;
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          houveTroca = true;
          trocas++;
        }
      }
      
      if (!houveTroca) break;
    }
    return { lista: arr, comparacoes, trocas };
  }
  
  console.log("Ordenada:", bubbleSort([1, 2, 3, 4, 5])); // Comp: 4, Trocas: 0 -> O(n)