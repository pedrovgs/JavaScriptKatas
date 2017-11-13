import {
  Card,
  Game,
  callNumber,
  generateGame,
  generateCard,
  usBingoNumbers,
  isWinnerCard
} from "../../src/bingo/bingo.js";

describe("Bingo spec", () => {
  jsc.property(
    "should return a called number between 1 and 75",
    arbitraryNumberOfCallNumberInvokations(),
    numberOfInvokations => {
      const game = generateGame();

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
      let game = generateGame();

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

  jsc.property(
    "when cards are generated does not contain repeated values",
    arbitraryNumberOfGenerateCardInvokations(),
    numberOfInvokations => {
      const cards = [...Array(numberOfInvokations).keys()].map(() =>
        generateCard()
      );
      return cards.every(card =>
        card.numbers.every(number =>
          card.numbers.filter(x => (x === number.length) === 1)
        )
      );
    }
  );

  jsc.property(
    "a card is winner if the 24 values have bein called",
    arbitraryGame(24),
    game => {
      const winnerCard = new Card(game.calledNumbers);
      return isWinnerCard(winnerCard, game);
    }
  );

  function arbitraryGame(minNumberOfcalledNumbers) {
    return jsc
      .integer(1, Math.min(minNumberOfcalledNumbers, 75))
      .smap(numberOfCalledNumbers =>
        generateGameWithCalledNumbers(numberOfCalledNumbers)
      );
  }

  function generateGameWithCalledNumbers(numberOfCalledNumbers) {
    let availableNumbers = usBingoNumbers.slice();
    const calledNumbers = [];
    for (let i = 0; i < numberOfCalledNumbers; i++) {
      const calledNumber =
        availableNumbers[generateRandomInt(0, availableNumbers.length - 1)];
      availableNumbers = availableNumbers.filter(x => x !== calledNumber);
      calledNumbers.push(calledNumber);
    }
    return new Game(availableNumbers, calledNumbers);
  }

  function arbitraryNumberOfCallNumberInvokations() {
    return jsc.integer(1, 75);
  }

  function arbitraryNumberOfGenerateCardInvokations() {
    return jsc.integer(1, 50);
  }

  function generateRandomInt(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }
});
