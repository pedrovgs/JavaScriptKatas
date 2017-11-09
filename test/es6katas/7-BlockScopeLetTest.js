// 7: block scope - let
// To do: make all tests pass, leave the asserts unchanged!

describe("`let` restricts the scope of the variable to the current block", () => {
  describe("`let` vs. `var`", () => {
    it("`var` works as usual", () => {
      var varX = false;
      if (true) { // eslint-disable-line
        var varX = true; // eslint-disable-line
      }
      assert.equal(varX, true);
    });

    it("`let` restricts scope to inside the block", () => {
      if (true) { // eslint-disable-line
        let letX = true; // eslint-disable-line
      }
      assert.throws(() => console.log(letX)); // eslint-disable-line
    });
  });

  describe("`let` usage", () => {
    it("`let` use in `for` loops", () => {
      let obj = { x: 1 };
      for (let key in obj) { // eslint-disable-line
      }
      assert.throws(() => console.log(key)); // eslint-disable-line
    });

    it("create artifical scope, using curly braces", () => {
      {
        let letX = true; // eslint-disable-line
      }
      assert.throws(() => console.log(letX)); // eslint-disable-line
    });
  });
});
