// 61: modules - import
// To do: make all tests pass, leave the assert lines unchanged!

import { equal, deepEqual, notEqual } from "assert"; // eslint-disable-line
import { equal as myEqual, default as myAssert } from "assert"; // eslint-disable-line

describe("use `import` to import functions that have been exported (somewhere else)", function() {
  describe("the import statement", function() {
    it("is only allowed on the root level", function() {
      // try to comment this out, it will yell at you :)
      // import assert from 'assert'; // eslint-disabled-line
    });

    it('import an entire module using `import <name> from "<moduleName>"`', function() {
      // this can't fail, since `assert` is imported by default
      assert.equal(typeof assert, "function");
    });
  });

  describe("import members", function() {
    it('import a single member, using `import {<memberName>} from "module"`', function() {
      assert.strictEqual(equal, assert.equal);
    });
    describe("separate multiple members with a comma", function() {
      it("`deepEqual` from the assert module", () => {
        assert.strictEqual(deepEqual, assert.deepEqual);
      });
      it("`notEqual` from the assert module", () => {
        assert.strictEqual(notEqual, assert.notEqual);
      });
    });
  });

  describe("alias imports", function() {
    it("using `member as alias` as memberName", function() {
      assert.strictEqual(myEqual, assert.equal);
    });
    it("rename the default export of a module, using `default as alias` as memberName", function() {
      assert.strictEqual(myAssert, assert);
    });
  });
});
