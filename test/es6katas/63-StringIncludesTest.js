// 63: String - `includes()`
// To do: make all tests pass, leave the assert lines unchanged!

describe("`string.includes()` finds string within another string", function() {
  describe("find a single character", function() {
    it("in a three char string", function() {
      const searchString = "x";
      assert.equal("xyz".includes(searchString), true);
    });
    it("reports false if character was not found", function() {
      const expected = false;
      assert.equal("xyz".includes("abc"), expected);
    });
  });

  describe("find a string", function() {
    it("that matches exactly", function() {
      const findSome = findMe => "xyz".includes(findMe);
      assert.equal(findSome("xyz"), true);
    });
  });

  describe("search for an empty string, is always true", function() {
    it("in an empty string", function() {
      const emptyString = "";
      assert.equal("".includes(emptyString), true);
    });
    it("in `abc`", function() {
      const actual = "abc".includes("");
      assert.equal(actual, true);
    });
  });

  describe("special/corner cases", function() {
    it("search for `undefined` in a string fails", function() {
      const findInAbc = what => "abc".includes(what);
      assert.equal(findInAbc(void 0), false);
    });
    it("searches case-sensitive", function() {
      const findInAbc = what => "abc".includes(what);
      assert.equal(findInAbc("A"), false);
    });
    it("must NOT be a regular expression", function() {
      const regExp = /.+/;
      assert.throws(() => {
        "".includes(regExp);
      });
    });
    describe('coerces the searched "thing" into a string', function() {
      it("e.g. from a number", function() {
        const actual = "123".includes(123);
        assert.equal(actual, true);
      });
      it("e.g. from an array", function() {
        const actual = "123".includes([1]);
        assert.equal(actual, true);
      });
      it("e.g. from an object, with a `toString()` method", function() {
        const objWithToString = { toString: () => "123" };
        assert.equal("123".includes(objWithToString), true);
      });
    });
  });

  describe("takes a position from where to start searching", function() {
    it("does not find `a` after position 1 in `abc`", function() {
      const position = 1;
      assert.equal("abc".includes("a", position), false);
    });
    it("even the position gets coerced", function() {
      const findAtPosition = pos => "xyz".includes("z", pos);
      assert.equal(findAtPosition("2"), true);
    });
    describe("invalid positions get converted to 0", function() {
      it("e.g. `undefined`", function() {
        const findAtPosition = (pos = 0) => "xyz".includes("x", pos);
        assert.equal(findAtPosition(void 0), true);
      });
      it("negative numbers", function() {
        const findAtPosition = pos => "xyz".includes("x", pos);
        assert.equal(findAtPosition(-2), true);
      });
      it("NaN", function() {
        const findAtPosition = pos => "xyz".includes("x", pos);
        assert.equal(findAtPosition(NaN), true);
      });
    });
  });
});
