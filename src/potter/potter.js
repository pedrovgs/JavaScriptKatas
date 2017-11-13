import { Enum } from "enumify";

export class HarryPotterBook extends Enum {}
HarryPotterBook.initEnum(["BOOK_1", "BOOK_2", "BOOK_3", "BOOK_4", "BOOK_5"]);

export function calculatePrice(cart) {
  const booksGroupedByBookNumber = groupBooks(cart);
  return calculatePriceBasedOnTheNumberOfBooks(booksGroupedByBookNumber);
}

function groupBooks(cart) {
  const groupedBooks = new Map();
  cart.forEach(value => {
    if (groupedBooks.has(value)) {
      const currentValue = groupedBooks.get(value);
      groupedBooks.set(value, currentValue + 1);
    } else {
      groupedBooks.set(value, 1);
    }
  });
  return Array.of(...groupedBooks.values());
}

function calculatePriceBasedOnTheNumberOfBooks(books) {
  const oneBookPrice = 8.0;
  const numberOfDifferentBooks = books.filter(x => x > 0).length;
  if (numberOfDifferentBooks === 0) {
    return 0.0;
  } else if (numberOfDifferentBooks === 1) {
    return oneBookPrice * books[0];
  } else if (numberOfDifferentBooks === 2) {
    return (
      oneBookPrice * 2 * 0.95 +
      calculatePriceBasedOnTheNumberOfBooks(removeDiscountedBooks(books))
    );
  } else if (numberOfDifferentBooks === 3) {
    return (
      oneBookPrice * 3 * 0.9 +
      calculatePriceBasedOnTheNumberOfBooks(removeDiscountedBooks(books))
    );
  } else if (numberOfDifferentBooks === 4) {
    return (
      oneBookPrice * 4 * 0.8 +
      calculatePriceBasedOnTheNumberOfBooks(removeDiscountedBooks(books))
    );
  } else if (numberOfDifferentBooks === 5) {
    return (
      oneBookPrice * 5 * 0.75 +
      calculatePriceBasedOnTheNumberOfBooks(removeDiscountedBooks(books))
    );
  }
}

function removeDiscountedBooks(books) {
  return books.map(x => x - 1);
}
