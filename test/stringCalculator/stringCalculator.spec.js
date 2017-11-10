import stringCalculator from "../../src/stringCalculator/stringCalculator";

describe("String calculator spec", () => {
  it("should return 0 for an empty string", () => {
    const result = stringCalculator("");

    expect(result).to.equal(0);
  });
});
