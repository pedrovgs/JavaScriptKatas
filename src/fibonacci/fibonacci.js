export function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

export function fibonacciTailRec(n) {
  return fibonacciTailRecInner(n, 1, 0);
}

function fibonacciTailRecInner(n, a, b) {
  if (n === 0) {
    return b;
  } else {
    return fibonacciTailRecInner(n - 1, a + b, a);
  }
}
