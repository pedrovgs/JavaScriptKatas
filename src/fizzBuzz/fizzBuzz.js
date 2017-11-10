function fizzBuzz(value) {
  const isMultipleOf3 = isMultipleOf(value, 3);
  const isMultipleOf5 = isMultipleOf(value, 5);
  if (isMultipleOf3 && isMultipleOf5) return "FizzBuzz";
  else if (isMultipleOf3) return "Fizz";
  else if (isMultipleOf5) return "Buzz";
  else return value.toString();
}

function isMultipleOf(x, y) {
  return x % y == 0;
}

export default fizzBuzz;
