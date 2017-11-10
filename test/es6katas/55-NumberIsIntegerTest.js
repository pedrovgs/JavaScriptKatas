// 55: Number - isInteger
// To do: make all tests pass, leave the assert lines unchanged!

describe("`Number.isInteger()` determines if a value is an integer", function() {
  const isTrue = what => assert.equal(what, true);
  const isFalse = what => assert.equal(what, false);

  it("`isInteger` is a static function on `Number`", function() {
    const whatType = "function";
    assert.equal(typeof Number.isInteger, whatType);
  });

  describe("zero in different ways", function() {
    it("0 is an integer", function() {
      const zero = 0;
      isTrue(Number.isInteger(zero));
    });
    it("0.000", function() {
      isTrue(Number.isInteger(0.0));
    });
    it('the string "0" is NOT an integer', function() {
      const stringZero = "0";
      isFalse(Number.isInteger(stringZero));
    });
  });

  describe("one in different ways", function() {
    it("0.111 + 0.889", function() {
      const rest = 0.889;
      isTrue(Number.isInteger(0.111 + rest));
    });
    it("0.5 + 0.2 + 0.2 + 0.1 = 1 ... isn`t it?", function() {
      const oneOrNot = 0.5 + 0.2 + 0.2 + 0.1;
      isFalse(Number.isInteger(oneOrNot));
    });
    it('parseInt`ed "1" is an integer', function() {
      const convertedToInt = Number.parseInt("1.01");
      isTrue(Number.isInteger(convertedToInt));
    });
  });

  describe("what is not an integer", function() {
    it("`Number()` is an integer", function() {
      const numberOne = Number();
      isTrue(Number.isInteger(numberOne));
    });
    it("`{}` is NOT an integer", function() {
      const isit = Number.isInteger({});
      isFalse(isit);
    });
    it("`0.1` is not an integer", function() {
      const isit = Number.isInteger(0.1);
      isFalse(isit);
    });
    it("`Number.Infinity` is not an integer", function() {
      const isit = Number.isInteger(Number.POSITIVE_INFINITY);
      isFalse(isit);
    });
    it("`NaN` is not an integer", function() {
      const isit = Number.isInteger(NaN);
      isFalse(isit);
    });
  });
});
