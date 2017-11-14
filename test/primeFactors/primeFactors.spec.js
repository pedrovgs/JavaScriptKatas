import primeFactors from "../../src/primeFactors/primeFactors";

describe("Prime factors spec", () => {
  jsc.property(
    "positive numbers have at least one prime factor",
    arbitraryPositiveInteger(),
    x => {
      const factors = primeFactors(x);
      return factors.length >= 1;
    }
  );

  jsc.property(
    "prime numbers have just one prime factor equal to the prime number",
    arbitraryPrimeNumber(),
    x => {
      return primeFactors(x).length === 1;
    }
  );

  jsc.property(
    "the product of a number prime factors is equal to the number",
    arbitraryPositiveInteger(),
    x => {
      return primeFactors(x).reduce((acc, x) => acc * x) === x;
    }
  );

  jsc.property(
    "if the number is not prime the number of prime factors is at least two",
    arbitraryNotPrimeNumber(),
    x => {
      return primeFactors(x).length >= 2;
    }
  );

  function arbitraryPositiveInteger() {
    return jsc.integer.smap(x => Math.abs(x) + 2);
  }

  function arbitraryPrimeNumber() {
    return jsc.suchthat(arbitraryPositiveInteger(), x => isPrime(x));
  }

  function arbitraryNotPrimeNumber() {
    return jsc.suchthat(arbitraryPositiveInteger(), x => !isPrime(x));
  }

  function isPrime(x) {
    const numbers = [...Array(x).keys()].map((v, i) => i);
    return numbers.filter(y => x % y === 0).length === 1;
  }
});
