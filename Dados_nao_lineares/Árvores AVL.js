altura(no) {
  return no ? no.altura : 0;
}

fatorBalanceamento(no) {
  return this.altura(no.esq) - this.altura(no.dir);
}
rotacaoDireita(y) {
  let x = y.esq;
  let T2 = x.dir;

  x.dir = y;
  y.esq = T2;

  return x;
}

rotacaoEsquerda(x) {
  let y = x.dir;
  let T2 = y.esq;

  y.esq = x;
  x.dir = T2;

  return y;
}