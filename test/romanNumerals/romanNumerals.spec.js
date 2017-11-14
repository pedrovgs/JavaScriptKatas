import { toRoman, toArabic } from "../../src/romanNumerals/romanNumerals";

describe("Roman numerals spec", () => {
  jsc.property(
    "translate from arabic to numeral and back to roman should return the same value",
    arbitraryArabic(),
    arabic => {
      const romanNumeral = toRoman(arabic);
      return arabic === toArabic(romanNumeral);
    }
  );

  jsc.property(
    "arabic numbers greater than zero returns non empty string as roman numeral",
    arbitraryNonZeroArabic(),
    arabic => {
      return toRoman(arabic).length > 0;
    }
  );

  jsc.property(
    "roman numerals V, D or L can never be repeated",
    arbitraryArabic(),
    arabic => {
      const romanNumeral = toRoman(arabic);
      const containsAsMuchOneV = containsAsMuchOne(romanNumeral, "V");
      const containsAsMuchOneD = containsAsMuchOne(romanNumeral, "D");
      const containsAsMuchOneL = containsAsMuchOne(romanNumeral, "L");
      return containsAsMuchOneV && containsAsMuchOneD && containsAsMuchOneL;
    }
  );

  function containsAsMuchOne(string, value) {
    return Array.of(string).filter(s => s === value).length <= 1;
  }

  function arbitraryArabic() {
    return jsc.integer(0, 3000);
  }

  function arbitraryNonZeroArabic() {
    return jsc.suchthat(arbitraryArabic(), x => x !== 0);
  }
});
