import stringCalculator from "../../src/string-calculator/string-calculator";

describe("String calculator spec", () => {
  it("should return 0 for an empty string", () => {
    const result = stringCalculator("");

    expect(result).to.equal(0);
  });

  it("should return the number inside the string if it just contains one number", () => {
    const result = stringCalculator("1");

    expect(result).to.equal(1);
  });

  it("should return the sum of two consecutive numbers separated by ','", () => {
    const result = stringCalculator("1,1");

    expect(result).to.equal(2);
  });

  it("should return the sum of two consecutive numbers separated by '\n'", () => {
    const result = stringCalculator("2\n3");

    expect(result).to.equal(5);
  });

  it("should return a big list of numbers separated by ','", () => {
    const result = stringCalculator("1,1,1,1,1,1,1,1,1,1,1");

    expect(result).to.equal(11);
  });

  it("should return 0 if the delimiter is customized but there are no values", () => {
    const result = stringCalculator("//x");

    expect(result).to.equal(0);
  });

  it("should return 1 if the delimiter is customized and the number inside the string is 1", () => {
    const result = stringCalculator("//x1");

    expect(result).to.equal(1);
  });

  it("should return the sum of big numbers separated by a custom delimiter", () => {
    const result = stringCalculator(
      "//&1665212997&1662109966&139852790&-866795925"
    );

    expect(result).to.equal(2600379828);
  });

  jsc.property(
    "result is always greater than zero if the array is not empty and full of positive values",
    arbitraryNonEmptyStringFullOfPositiveNumbersSeparatedByComas(),
    input => {
      return stringCalculator(input) > 0;
    }
  );

  function arbitraryNonEmptyStringFullOfPositiveNumbersSeparatedByComas() {
    return jsc.nearray(arbitraryPositiveInt()).smap(array => array.join(","));
  }

  function arbitraryPositiveInt() {
    return jsc.int32.smap(x => Math.abs(x));
  }
});
