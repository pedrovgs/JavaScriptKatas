import { greet } from "../../src/greeting/greeting";

describe("Greetings kata", () => {
  it("should say hello to bob if the name is bob", () => {
    expect(greet("Bob")).to.deep.equal("Hello, Bob.");
  });

  jsc.property(
    "says hello using the name passed as parameter",
    arbitraryLowerCaseNames(),
    name => {
      return `Hello, ${name}.` === greet(name);
    }
  );

  it("should say hello to my friend if the input is not defined", () => {
    expect(greet()).to.deep.equal("Hello, my friend.");
  });

  it("should say hello yelling to JERRY if he's yelling", () => {
    expect(greet("JERRY")).to.deep.equal("HELLO JERRY!");
  });

  jsc.property(
    "if the user of the lib is yelling, we should yell back",
    jsc.asciistring.smap(name => name.toUpperCase()),
    name => {
      return `HELLO ${name}!` === greet(name);
    }
  );

  it("should say hello to every member in the group if we greet more than one person", () => {
    expect(greet("Jill", "Jane")).to.deep.equal("Hello, Jill and Jane.");
  });
});

function arbitraryLowerCaseNames() {
  return jsc.suchthat(
    jsc.asciinestring,
    string => string.toUpperCase() !== string
  );
}
