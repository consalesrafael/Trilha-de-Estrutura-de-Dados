
const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));


const fibMemo = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  return memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
};