function primeFactors(n) {
  if (n <= 1) {
    return [];
  } else {
    const firstPrimeLowerThanN = firstPrimeLowerThan(n);
    if (firstPrimeLowerThanN) {
      return [firstPrimeLowerThanN, ...primeFactors(n / firstPrimeLowerThanN)];
    } else {
      return [n];
    }
  }
}

function firstPrimeLowerThan(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return i;
    }
  }
}

export default primeFactors;
