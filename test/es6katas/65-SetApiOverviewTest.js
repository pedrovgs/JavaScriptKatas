// 65: Set - API overview
// To do: make all tests pass, leave the assert lines unchanged!

describe("`Set` API overview", function() {
  const api = [
    "size",
    "add",
    "clear",
    "delete",
    "entries",
    "forEach",
    "has",
    "keys",
    "values"
  ];
  let set;
  beforeEach(function() {
    set = new Set(api);
  });

  it("a Set can be created from an array", function() {
    let set = new Set(api);
    assert.deepEqual(Array.from(set), api);
  });

  it("`size` is the number of values", function() {
    const theSize = set.size;
    assert.equal(theSize, api.length);
  });

  it("`add()` appends the given value", function() {
    // hint: to make the example consistent you can add the `Symbol.iterator` to `set`
    // strongly speaking it is missing in the API.
    set.add(Symbol.iterator);
    assert.equal(set.size, api.length + 1);
  });

  it("`clear()` removes all elements", function() {
    set.clear();
    assert.equal(set.size, 0);
  });

  it("`delete()` removes the given value", function() {
    set.delete(api[1]);
    assert.equal(set.size, api.length - 1);
  });

  it("`entries()` returns an iterator for all values", function() {
    const expectedEntries = api.map(entry => [entry, entry]);
    const actualEntries = set.entries();
    assert.deepEqual([...actualEntries], expectedEntries);
  });

  it("`forEach()` calls a callback for each value", function() {
    let values = [];
    set.forEach(value => {
      values.push(value);
    });
    assert.deepEqual(values, api);
  });

  it("`has()` returns true if the given value is in the set", function() {
    const propertyName = "size";
    assert.equal(set.has(propertyName), true);
  });

  describe("returns an iterator that contains all values", function() {
    // in order to be alike to `Map` `keys()` and `values()` are essentially the same thing for a `Set`.
    it("`keys()`", function() {
      const allKeys = set.keys();
      assert.deepEqual([...allKeys], api);
    });

    it("`values()`", function() {
      const allValues = set.values();
      assert.deepEqual([...allValues], api);
    });

    it("`[Symbol.iterator]()`", function() {
      const iteratorKey = Symbol.iterator;
      assert.deepEqual([...set[iteratorKey]()], api);
    });
  });
});
