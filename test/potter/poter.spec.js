import { calculatePrice, HarryPotterBook } from "../../src/potter/potter";

describe("Potter spec", () => {
  it("an empty cart is free", () => {
    expect(calculatePrice([])).to.equal(0);
  });
});
