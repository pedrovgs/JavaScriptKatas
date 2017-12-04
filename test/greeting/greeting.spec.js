import { greet } from "../../src/greeting/greeting";

describe("Greetings kata", () => {
  jsc.property(
    "says hello using the name passed as parameter",
    jsc.string,
    name => {
      return `Hello, ${name}` === greet(name);
    }
  );
});
