// 29: array - `Array.from` static method
// To do: make all tests pass, leave the assert lines unchanged!
let assert = require("assert");
describe("`Array.from` converts an array-like object or list into an Array", () => {
  const arrayLike = { 0: "one", 1: "two", length: 2 };

  it("call `Array.from` with an array-like object", function() {
    const arr = Array.from(arrayLike);

    assert.deepEqual(arr, ["one", "two"]);
  });

  describe("custom conversion using a map function as second param", () => {
    it("we can modify the value before putting it in the array", function() {
      const arr = Array.from(arrayLike, value => value.toUpperCase());
      assert.deepEqual(arr, ["ONE", "TWO"]);
    });

    it("and we also get the object`s key as second parameter", function() {
      const arr = Array.from(arrayLike, (key, value) => `${value}=${key}`);
      assert.deepEqual(arr, ["0=one", "1=two"]);
    });
  });
});
