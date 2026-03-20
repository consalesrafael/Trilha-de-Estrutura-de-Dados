
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    const meio = Math.floor(arr.length / 2);
    const esq = mergeSort(arr.slice(0, meio));
    const dir = mergeSort(arr.slice(meio));
    return merge(esq, dir);
  };
  
  const merge = (esq, dir) => {
    let result = [];
    while (esq.length && dir.length) {
      if (esq[0] < dir[0]) result.push(esq.shift());
      else result.push(dir.shift());
    }
    return [...result, ...esq, ...dir];
  };