import {
  Developer,
  Pedro,
  Fran,
  Davide,
  Sergio,
  Jorge
} from "../../src/maxibon/maxibon";

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

  it("assign the number of maxibons specified to every developer", () => {
    expect(Pedro.maxibonsToGrab).to.equal(3);
    expect(Fran.maxibonsToGrab).to.equal(1);
    expect(Davide.maxibonsToGrab).to.equal(0);
    expect(Sergio.maxibonsToGrab).to.equal(2);
    expect(Jorge.maxibonsToGrab).to.equal(1);
  });
});
