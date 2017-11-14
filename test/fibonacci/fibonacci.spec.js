import { fibonacci, fibonacciTailRec } from "../../src/fibonacci/fibonacci";

describe("Fibonacci spec", () => {
  jsc.property(
    "every fibonacci element can be expressed as the sum of the two previous items",
    arbitrarySmallPositiveInteger(),
    n => {
      const x = fibonacci(n);
      const y = fibonacci(n - 1);
      const z = fibonacci(n - 2);
      return x === y + z;
    }
  );

  jsc.property(
    "fibonacci tail recursive version returns the same value the regular one does",
    arbitrarySmallPositiveInteger(),
    n => {
      return fibonacciTailRec(n) === fibonacci(n);
    }
  );

  jsc.property(
    "tail recursive implementation should support bigger numbers",
    arbitraryPositiveInteger(),
    n => {
      const x = fibonacciTailRec(n);
      const y = fibonacciTailRec(n - 1);
      const z = fibonacciTailRec(n - 2);
      return x === y + z;
    }
  );

  function arbitrarySmallPositiveInteger() {
    return jsc.integer(2, 20);
  }

  function arbitraryPositiveInteger() {
    return jsc.integer(2, 2000);
  }
});
