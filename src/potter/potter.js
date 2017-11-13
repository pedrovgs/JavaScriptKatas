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
  const numberOfDifferentBooks = books.length;
  if (numberOfDifferentBooks === 0) {
    return 0.0;
  } else if (numberOfDifferentBooks === 1) {
    return oneBookPrice * books[0];
  } else if (numberOfDifferentBooks === 2) {
    return 0.0;
  } else if (numberOfDifferentBooks === 3) {
    return 0.0;
  } else if (numberOfDifferentBooks === 4) {
    return 0.0;
  } else if (numberOfDifferentBooks === 5) {
    return 0.0;
  }
}
