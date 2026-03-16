import { calculatePrice, HarryPotterBook } from "../../src/potter/potter";

describe("Potter spec", () => {
  it("an empty cart is free", () => {
    expect(calculatePrice([])).to.equal(0);
  });

  jsc.property("just one book costs 8.0 euros", arbitraryBook(), book => {
    return calculatePrice([book]) === 8.0;
  });

  jsc.property(
    "if there are two different books the cost of every repeated book is a 5% less",
    arbitraryDifferentBooks(2),
    cart => {
      return calculatePrice(cart) === 15.2;
    }
  );

  jsc.property(
    "if there are three different books the cost of every repeated book is a 10% less",
    arbitraryDifferentBooks(3),
    cart => {
      return calculatePrice(cart) === 21.6;
    }
  );

  jsc.property(
    "if there are four different books the cost of every repeated book is a 20% less",
    arbitraryDifferentBooks(4),
    cart => {
      return calculatePrice(cart) === 25.6;
    }
  );

  jsc.property(
    "if there are five different books the cost of every repeated book is a 25% less",
    arbitraryDifferentBooks(5),
    cart => {
      return calculatePrice(cart) === 30.0;
    }
  );

  jsc.property(
    "if all the books are the same there is no discount",
    arbitrarySameBooks(),
    cart => {
      return calculatePrice(cart) === cart.length * 8.0;
    }
  );

  it("2 book1, 2 book2, 2 book2, 2 book3, 1 book4 and 1 book5 costs 51.60 EUR", () => {
    const cart = [
      HarryPotterBook.BOOK_1,
      HarryPotterBook.BOOK_1,
      HarryPotterBook.BOOK_2,
      HarryPotterBook.BOOK_2,
      HarryPotterBook.BOOK_3,
      HarryPotterBook.BOOK_3,
      HarryPotterBook.BOOK_4,
      HarryPotterBook.BOOK_5
    ];

    expect(calculatePrice(cart)).to.equal(51.6);
  });

  it("2 book1, 1 book2 costs 23,2 EUR", () => {
    const cart = [
      HarryPotterBook.BOOK_1,
      HarryPotterBook.BOOK_1,
      HarryPotterBook.BOOK_2
    ];

    expect(calculatePrice(cart)).to.equal(23.2);
  });
  
  it("five different books plus one cost 38,0 EUR", () => {
    const cart = [
      HarryPotterBook.BOOK_1,
      HarryPotterBook.BOOK_2,
      HarryPotterBook.BOOK_2,
      HarryPotterBook.BOOK_3,
      HarryPotterBook.BOOK_4,
      HarryPotterBook.BOOK_5
    ];

    expect(calculatePrice(cart)).to.equal(38.0);
  });

  function arbitraryBook() {
    return jsc.suchthat(
      jsc.oneof(
        jsc.constant(HarryPotterBook.BOOK_1),
        jsc.constant(HarryPotterBook.BOOK_2),
        jsc.constant(HarryPotterBook.BOOK_3),
        jsc.constant(HarryPotterBook.BOOK_4),
        jsc.constant(HarryPotterBook.BOOK_5)
      ),
      gesture => typeof gesture !== "undefined"
    );
  }

  function arbitrarySameBooks() {
    const book = jsc.sampler(arbitraryBook())();
    return jsc.array(jsc.constant(book));
  }

  function arbitraryDifferentBooks(numberOfDifferentBooks) {
    return jsc.suchthat(
      jsc.nearray(jsc.elements(HarryPotterBook.enumValues)),
      array =>
        array.length === numberOfDifferentBooks &&
        array.every(x => array.filter(y => y === x).length === 1)
    );
  }
});
