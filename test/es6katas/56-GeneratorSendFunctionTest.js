// 56: Generator - Send function to a generator
// To do: make all tests pass, leave the assert lines unchanged!

describe("pass a function to a generator", () => {
  it("the generator can receive a function as a value", function() {
    let fn = function() {};
    function* generatorFunction() {
      assert.equal(yield fn, null);
    }
    let iterator = generatorFunction();
    iterator.next();
    iterator.next();
  });

  it("pass a function to the iterator, which calls it", function() {
    function* generatorFunction() {
      yield (yield 1)();
    }

    var iterator = generatorFunction();
    var iteratedOver = [iterator.next().value, iterator.next(() => 2).value];

    assert.deepEqual([1, 2], iteratedOver);
  });

  it("nesting yielded function calls", function() {
    function* generatorFunction() {
      yield (yield (yield 1)())();
    }

    var iterator = generatorFunction();
    var iteratedOver = [
      iterator.next().value,
      iterator.next(() => 2).value,
      iterator.next(() => 3).value
    ];

    assert.deepEqual([1, 2, 3], iteratedOver);
  });
});
