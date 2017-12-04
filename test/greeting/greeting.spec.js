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

  it("should say hello to every member in the group of two people if we greet more than one person", () => {
    expect(greet("Jill", "Jane")).to.deep.equal("Hello, Jill and Jane.");
  });

  jsc.property(
    "should say hello to a bunch of people using Oxford coma",
    arbitraryListOfNamesGreaterThan(2),
    names => {
      let result = greet(...names);
      let containsOxfordComa = result.indexOf(", and") != -1;
      let containsAsManyComasAsNames =
        result.split(", ").length - 1 === names.length;
      return containsOxfordComa && containsAsManyComasAsNames;
    }
  );

  it("should say hello to my three friends using Oxford coma", () => {
    let result = greet("Amy", "Brian", "Charlotte");
    expect(result).to.deep.equal("Hello, Amy, Brian, and Charlotte.");
  });
});

function arbitraryLowerCaseNames() {
  return jsc.suchthat(
    jsc.asciinestring,
    string => `${string}`.toUpperCase() !== string
  );
}

function arbitraryListOfNamesGreaterThan(minimumListSize) {
  return jsc.suchthat(
    jsc.nearray(arbitraryLowerCaseNames()),
    names => names.length > minimumListSize
  );
}
