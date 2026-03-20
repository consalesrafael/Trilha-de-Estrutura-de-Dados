
const inOrder = (no) => {
    if (no) { inOrder(no.esq); console.log(no.valor); inOrder(no.dir); }
  };
  
  
  const preOrder = (no) => {
    if (no) { console.log(no.valor); preOrder(no.esq); preOrder(no.dir); }
  };
  
  
  const postOrder = (no) => {
    if (no) { postOrder(no.esq); postOrder(no.dir); console.log(no.valor); }
  };