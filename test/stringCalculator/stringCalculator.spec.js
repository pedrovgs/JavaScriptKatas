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
});
