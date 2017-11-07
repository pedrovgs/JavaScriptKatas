// 17: unicode - in strings
// To do: make all tests pass, leave the assert lines unchanged!
let assert = require("assert");
describe("unicode strings", () => {
  it("are \\u prefixed", () => {
    const nuclear = "\u2622";
    assert.equal(nuclear, "☢");
  });

  it("value is 4 bytes/digits", () => {
    const nuclear = "\u2622";
    assert.equal(`no more ${nuclear}`, "no more ☢");
  });

  it("value is hexadecimal", () => {
    const nuclear = `\u006E\u006F more \u2622`;
    assert.equal(nuclear, "no more ☢");
  });

  it("curly braces may surround the value", () => {
    const nuclear = `\u{0000000006E}\u{00006F} more \u2622`;
    assert.equal(nuclear, "no more ☢");
  });
});
