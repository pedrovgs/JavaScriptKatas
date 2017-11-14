import { Enum } from "enumify";

export class RomanNumeral extends Enum {}
RomanNumeral.initEnum([
  "I",
  "IV",
  "V",
  "IX",
  "X",
  "XL",
  "XLIV",
  "L",
  "XC",
  "C",
  "CD",
  "D",
  "CM",
  "M"
]);

const romanValues = [
  [RomanNumeral.I, 1],
  [RomanNumeral.IV, 4],
  [RomanNumeral.V, 5],
  [RomanNumeral.IX, 9],
  [RomanNumeral.X, 10],
  [RomanNumeral.XL, 40],
  [RomanNumeral.XLIV, 44],
  [RomanNumeral.L, 50],
  [RomanNumeral.XC, 90],
  [RomanNumeral.C, 100],
  [RomanNumeral.CD, 400],
  [RomanNumeral.D, 500],
  [RomanNumeral.CM, 900],
  [RomanNumeral.M, 1000]
];

export function toArabic(roman) {
  return toArabicInner(roman.toUpperCase(), 0);
}

export function toRoman(arabic) {
  return toRomanInner(arabic, "");
}

function toArabicInner(roman, acc) {
  if (roman.length === 0) {
    return acc;
  } else if (roman.length === 1) {
    return acc + extractRomanValue(roman);
  } else {
    const combinedRomanNumeral = roman.substring(0, 2);
    if (isRomanNumeral(combinedRomanNumeral)) {
      const updatedAcc = acc + extractRomanValue(combinedRomanNumeral);
      const restOfTheRomanNumber = roman.slice(2, roman.length);
      return toArabicInner(restOfTheRomanNumber, updatedAcc);
    } else {
      const updatedAcc = acc + extractRomanValue(roman.substring(0, 1));
      const restOfTheRomanNumber = roman.slice(1, roman.length);
      return toArabicInner(restOfTheRomanNumber, updatedAcc);
    }
  }
}

function toRomanInner(arabic, acc) {
  if (arabic === 0) {
    return acc;
  } else {
    const closerRoman = extractCloserRoman(arabic);
    const closerRomanValue = closerRoman[1];
    return toRomanInner(arabic - closerRomanValue, acc + closerRoman[0].name);
  }
}

function extractCloserRoman(arabic) {
  let possibleValues = romanValues.filter(x => arabic - x[1] >= 0);
  return possibleValues[possibleValues.length - 1];
}

function isRomanNumeral(romanNumeral) {
  return typeof RomanNumeral.enumValueOf(romanNumeral) !== "undefined";
}

function extractRomanValue(romanNumber) {
  return romanValues.find(
    v => v[0] === RomanNumeral.enumValueOf(romanNumber)
  )[1];
}
