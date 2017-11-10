import stringCalculator from "../../src/stringCalculator/stringCalculator";

describe("String calculator spec", () => {
  it("should return 0 for an empty string", () => {
    const result = stringCalculator("");

    expect(result).to.equal(0);
  });

  it("should return the number inside the string if it just contains one number", () => {
    const result = stringCalculator("1");

    expect(result).to.equal(1);
  });

  it("should return the sum of two consecutive numbers", () => {
    const result = stringCalculator("1,1");

    expect(result).to.equal(2);
  });

  jsc.property(
    "sum is always greater than zero if the array is not empty and full of positive values",
    arbitraryNonEmptyStringFullOfPositiveNumbersSeparatedByComas(),
    input => {
      return stringCalculator(input) > 0;
    }
  );

  function arbitraryNonEmptyStringFullOfPositiveNumbersSeparatedByComas() {
    return jsc
      .suchthat(jsc.array(arbitraryPositiveInt()), array => array.length > 0)
      .smap(array => array.join(","));
  }

  function arbitraryPositiveInt() {
    return jsc.int32.smap(x => Math.abs(x));
  }
});
