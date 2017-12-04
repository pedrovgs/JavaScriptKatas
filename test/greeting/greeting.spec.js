import { greet } from "../../src/greeting/greeting";

describe("Greetings kata", () => {
  jsc.property(
    "says hello using the name passed as parameter",
    jsc.string,
    name => {
      return `Hello, ${name}.` === greet(name);
    }
  );

  it("should say hello to my friend if the input is not defined", () => {
    expect(greet()).to.deep.equal("Hello, my friend.");
  });
});
