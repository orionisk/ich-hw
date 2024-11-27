function fibonacciRecursive(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
}

function fibonacciIterative(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
