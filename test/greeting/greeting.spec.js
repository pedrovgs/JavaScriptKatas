import { greet } from "../../src/greeting/greeting";

describe("Greetings kata", () => {
  it("should say hello to bob if the name is bob", () => {
    expect(greet("Bob")).to.equal("Hello, Bob.");
  });

  jsc.property(
    "says hello using the name passed as parameter",
    arbitraryLowerCaseRegularName(),
    name => {
      return `Hello, ${name}.` === greet(name);
    }
  );

  it("should say hello to my friend if the input is not defined", () => {
    expect(greet()).to.equal("Hello, my friend.");
  });

  it("should say hello yelling to JERRY if he's yelling", () => {
    expect(greet("JERRY")).to.equal("HELLO JERRY!");
  });

  jsc.property(
    "if the user of the lib is yelling, we should yell back",
    arbitraryLowerCaseRegularName().smap(name => name.toUpperCase()),
    name => {
      return `HELLO ${name}!` === greet(name);
    }
  );

  it("should say hello to every member in the group of two people if we greet more than one person", () => {
    expect(greet("Jill", "Jane")).to.equal("Hello, Jill and Jane.");
  });

  jsc.property(
    "should say hello to a bunch of people using Oxford coma",
    arbitraryListOfNamesGreaterThan(2),
    names => {
      let result = greet(...names);
      let containsOxfordComa = result.indexOf(", and") !== -1;
      let containsAsManyComasAsNames =
        result.split(", ").length - 1 === names.length;
      return containsOxfordComa && containsAsManyComasAsNames;
    }
  );

  it("should say hello to my three friends using Oxford coma", () => {
    let result = greet("Amy", "Brian", "Charlotte");
    expect(result).to.equal("Hello, Amy, Brian, and Charlotte.");
  });

  it("should say hello to a group of friends when someone is yelling and some others not", () => {
    let result = greet("Amy", "BRIAN", "Charlotte");
    expect(result).to.equal("Hello, Amy and Charlotte. AND HELLO BRIAN!");
  });

  it("should split names containing , as two names", () => {
    let result = greet("Amy", "Brian", "Char,lotte");
    expect(result).to.equal("Hello, Amy, Brian, Char, and lotte.");
  });

  it('should handle names rounded with "" as a single name', () => {
    let result = greet("Bob", '"Charlie, Dianne"');
    expect(result).to.equal("Hello, Bob and Charlie, Dianne.");
  });
});

function arbitraryLowerCaseRegularName() {
  return jsc.suchthat(
    jsc.asciinestring,
    string =>
      `${string}`.toUpperCase() !== string &&
      string.indexOf(",") === -1 &&
      string.indexOf('"') === -1
  );
}

function arbitraryListOfNamesGreaterThan(minimumListSize) {
  return jsc.suchthat(
    jsc.nearray(arbitraryLowerCaseRegularName()),
    names => names.length > minimumListSize
  );
}
