import { Developer } from "../../src/maxibon/maxibon";

describe("Developer spec", () => {
  jsc.property(
    "developers can't grab a negative number of maxibons",
    jsc.string,
    jsc.integer,
    (name, maxibonsToGrab) => {
      const dev = new Developer(name, maxibonsToGrab);
      return dev.maxibonsToGrab >= 0;
    }
  );

  jsc.property(
    "developer's constructor assigns the name as is",
    jsc.string,
    jsc.integer,
    (name, maxibonsToGrab) => {
      const dev = new Developer(name, maxibonsToGrab);
      return dev.name === name;
    }
  );
});
