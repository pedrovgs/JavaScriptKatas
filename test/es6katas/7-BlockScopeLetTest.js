// 7: block scope - let
// To do: make all tests pass, leave the asserts unchanged!
let assert = require("assert");
describe("`let` restricts the scope of the variable to the current block", () => {
  describe("`let` vs. `var`", () => {
    it("`var` works as usual", () => {
      var varX = false;
      if (true) {
        var varX = true;
      }
      assert.equal(varX, true);
    });

    it("`let` restricts scope to inside the block", () => {
      if (true) {
        let letX = true;
      }
      assert.throws(() => console.log(letX));
    });
  });

  describe("`let` usage", () => {
    it("`let` use in `for` loops", () => {
      let obj = { x: 1 };
      for (let key in obj) {
      }
      assert.throws(() => console.log(key));
    });

    it("create artifical scope, using curly braces", () => {
      {
        let letX = true;
      }
      assert.throws(() => console.log(letX));
    });
  });
});
