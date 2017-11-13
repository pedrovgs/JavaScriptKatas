import { calculatePrice, HarryPotterBook } from "../../src/potter/potter";

describe("Potter spec", () => {
  it("an empty cart is free", () => {
    expect(calculatePrice([])).to.equal(0);
  });

  jsc.property("just one book costs 8.0 euros", arbitraryBook(), book => {
    return calculatePrice([book]) === 8.0;
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
});
