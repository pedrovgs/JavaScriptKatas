import fizzBuzz from "../../src/fizzBuzz/fizzBuzz";

describe("FizzBuzz spec", () => {
  it("should return the value passed as String if it's not multiple of 3 or 5", () => {
    const result = fizzBuzz(1);

    expect(result).to.equal("1");
  });

  it("should return Fizz if the value passed is multiple of three", () => {
    const result = fizzBuzz(3);

    expect(result).to.equal("Fizz");
  });

  it("should return Buzz if the value passed is multiple of five", () => {
    const result = fizzBuzz(5);

    expect(result).to.equal("Buzz");
  });

  it("should return FizzBUzz if the value passed is multiple of three and five", () => {
    const result = fizzBuzz(15);

    expect(result).to.equal("FizzBuzz");
  });

  const arbitraryMultipleOfThree = jsc.suchthat(multipleOf(3), value => {
    return value % 3 == 0 && value % 5 != 0;
  });
  const arbitraryMultipleOfFive = jsc.suchthat(multipleOf(5), value => {
    return value % 5 == 0 && value % 3 != 0;
  });
  const arbitraryMultipleOfThreeAndFive = multipleOf(15);

  function multipleOf(x) {
    return jsc.integer.smap(value => Math.abs(value) * x);
  }

  function arbitraryNotMultipleOf(...values) {
    return jsc.suchthat(
      jsc.integer.smap(x => Math.abs(x)),
      value => values.filter(x => value % x == 0).length == 0
    );
  }

  jsc.property(
    "values not multiple of 3 or 5 should be returned as a string",
    arbitraryNotMultipleOf(3, 5),
    value => {
      return fizzBuzz(value) === value.toString();
    }
  );

  jsc.property(
    "values multiple of 3 should return Fizz",
    arbitraryMultipleOfThree,
    value => {
      return fizzBuzz(value) === "Fizz";
    }
  );

  jsc.property(
    "values multiple of 5 should return Buzz",
    arbitraryMultipleOfFive,
    value => {
      return fizzBuzz(value) === "Buzz";
    }
  );

  jsc.property(
    "values multiple of 3 and 5 should return FizzBuzz",
    arbitraryMultipleOfThreeAndFive,
    value => {
      return fizzBuzz(value) === "FizzBuzz";
    }
  );
});
