// 50: Generator - iterator
// To do: make all tests pass, leave the assert lines unchanged!

describe("a generator returns an iterable object", function() {
  function* generatorFunction() {
    yield 1;
    yield 2;
  }

  let generator;

  beforeEach(() => {
    generator = generatorFunction();
  });

  it("a generator returns an object", function() {
    const typeOfTheGenerator = "object";
    assert.equal(typeof generator, typeOfTheGenerator);
  });

  it("a generator object has a key `Symbol.iterator`", function() {
    const key = Symbol.iterator;
    assert.equal(key in generator, true);
  });

  it("the `Symbol.iterator` is a function", function() {
    const theType = typeof generator[Symbol.iterator];
    assert.equal(theType, "function");
  });

  it("can be looped with `for-of`, which expects an iterable", function() {
    function iterateForOf() {
      for (let value of generator) { // eslint-disable-line
        // no statements needed
      }
    }
    assert.doesNotThrow(iterateForOf);
  });
});
