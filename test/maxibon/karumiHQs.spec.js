import {
  Developer,
  KarumiHQs,
  Pedro,
  Davide,
  Sergio,
  Fran
} from "../../src/maxibon/maxibon";

describe("KarumiHQs", () => {
  it("starts the day with 10 maxibons", () => {
    const office = new KarumiHQs();

    expect(office.maxibonsLeft).to.equal(10);
  });

  jsc.property(
    "always has more than two maxibons in the fridge",
    arbitraryDeveloper(),
    dev => {
      const office = new KarumiHQs();
      office.openFridge(dev);
      return office.maxibonsLeft > 2;
    }
  );

  jsc.property(
    "request 10 more maxibons using the chat if there are less than 3 in the fridge",
    arbitraryHungryDeveloper(),
    dev => {
      const chat = new MockChat();
      const office = new KarumiHQs(chat);

      office.openFridge(dev);

      return (
        chat.messageSent === `Hi guys, I'm ${dev.name}. We need more maxibons!`
      );
    }
  );

  jsc.property(
    "never request more maxibons to the team using the chat if there are more than 2 in the fridge",
    arbitraryNotSoHungryDeveloper(),
    dev => {
      const chat = new MockChat();
      const office = new KarumiHQs(chat);

      office.openFridge(dev);

      return typeof chat.messageSent === "undefined";
    }
  );

  jsc.property(
    "always has more than two maxibons in the fridge even if some karumies grab maxibons in group",
    arbitraryDevelopers(),
    devs => {
      const office = new KarumiHQs();
      office.openFridge(devs);
      return office.maxibonsLeft > 2;
    }
  );

  const testScenarios = [
    [[Pedro], 7],
    [[Pedro, Davide], 7],
    [[Pedro, Davide, Fran, Sergio], 4],
    [[Pedro, Davide, Fran, Sergio, Pedro, Davide, Fran, Sergio], 8]
  ];

  testScenarios.forEach(testScenario => {
    let devs = testScenario[0];
    let expectedMaxibonsLeft = testScenario[1];
    it(`if ${devs} grab some maxibons, the number of maxibons left is ${expectedMaxibonsLeft}`, () => {
      const office = new KarumiHQs();

      office.openFridge(devs);

      expect(office.maxibonsLeft).to.equal(expectedMaxibonsLeft);
    });
  });

  function arbitraryDeveloper() {
    return jsc.integer.smap(maxibonsToGrab => {
      const name = jsc.sampler(jsc.string)();
      return new Developer(name, maxibonsToGrab);
    });
  }

  function arbitraryDevelopers() {
    return jsc.nearray(arbitraryDeveloper());
  }

  function arbitraryHungryDeveloper() {
    return jsc.integer(8, Number.MAX_SAFE_INTEGER).smap(maxibonsToGrab => {
      const name = jsc.sampler(jsc.string)();
      return new Developer(name, maxibonsToGrab);
    });
  }

  function arbitraryNotSoHungryDeveloper() {
    return jsc.integer(0, 7).smap(maxibonsToGrab => {
      const name = jsc.sampler(jsc.string)();
      return new Developer(name, maxibonsToGrab);
    });
  }

  class MockChat {
    sendMessage(message) {
      this.messageSent = message;
    }
  }
});
