import { Game, card, callNumber, generateCard } from "../../src/bingo/bingo.js";

describe("Bingo spec", () => {
  jsc.property(
    "should return a called number between 1 and 75",
    arbitraryNumberOfCallNumberInvokations(),
    numberOfInvokations => {
      const game = new Game();

      const executions = [...Array(numberOfInvokations).keys()].map(() => {
        const [calledNumber] = callNumber(game);
        return calledNumber >= 1 && calledNumber <= 75;
      });
      return executions.every(execution => execution === true);
    }
  );

  jsc.property(
    "should return a an updated game with the called number as part of the calledNumbers list and not as part of the available numbers",
    arbitraryNumberOfCallNumberInvokations(),
    numberOfInvokations => {
      let game = new Game();

      const calledNumbers = [...Array(numberOfInvokations).keys()].map(() => {
        const result = callNumber(game);
        game = result[1];
        return result[0];
      });

      const numbersAreCalled = calledNumbers.every(calledNumber =>
        game.calledNumbers.includes(calledNumber)
      );
      const numbersAreNotAvailable = calledNumbers.every(
        calledNumber => !game.availableNumbers.includes(calledNumber)
      );
      return numbersAreCalled && numbersAreNotAvailable;
    }
  );

  jsc.property(
    "should generate cards with 24 values between 1 and 75",
    arbitraryNumberOfGenerateCardInvokations(),
    numberOfInvokations => {
      const cards = [...Array(numberOfInvokations).keys()].map(() =>
        generateCard()
      );
      return cards.every(
        card =>
          card.numbers.length == 24 &&
          card.numbers.every(number => number >= 1 && number <= 75)
      );
    }
  );

  function arbitraryNumberOfCallNumberInvokations() {
    return jsc.integer(1, 75);
  }

  function arbitraryNumberOfGenerateCardInvokations() {
    return jsc.integer(1, 50);
  }
});
