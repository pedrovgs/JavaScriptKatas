import fizzBuzz from "../../src/fizzBuzz/fizzBuzz";

describe("FizzBuzz spec", () => {
  it("should return the value passed as String if it's not multiple of 3 or 5", () => {
    const result = fizzBuzz(1);

    expect(result).to.equal("1");
  });

  it("should return Fixx if the value passed is multiple of three", () => {
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
});
