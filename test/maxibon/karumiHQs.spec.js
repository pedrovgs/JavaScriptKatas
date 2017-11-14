import { Developer, KarumiHQs } from "../../src/maxibon/maxibon";

describe("KarumiHQs", () => {
  const chatApi = { sendMessage(message) {} };

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
    "buy 10 more maxibons if there are less than 3 in the fridge",
    arbitraryHungryDeveloper(),
    dev => {
      const office = new KarumiHQs();
      office.openFridge(dev);
      return office.maxibonsLeft === calculateMaxibonsLeft(dev);
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

  function calculateMaxibonsLeft(dev) {
    let maxibonsLeft = Math.max(0, 10 - dev.maxibonsToGrab);
    if (maxibonsLeft <= 2) {
      maxibonsLeft += 10;
    }
    return maxibonsLeft;
  }

  class MockChat {
    sendMessage(message) {
      this.messageSent = message;
    }
  }
});
