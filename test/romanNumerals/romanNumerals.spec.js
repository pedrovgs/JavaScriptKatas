import { toRoman, toArabic } from "../../src/romanNumerals/romanNumerals";

describe("Roman numerals spec", () => {
  jsc.property(
    "translate from arabic to numeral and back to roman should return the same value",
    arbitraryNonZeroInt(),
    arabic => {
      const romanNumeral = toRoman(arabic);
      return arabic === toArabic(romanNumeral);
    }
  );
  function arbitraryNonZeroInt() {
    return jsc.integer(1, 3000);
  }
});
