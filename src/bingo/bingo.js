export const usBingoNumbers = [...Array(75).keys()].map(key => key + 1);

export class Game {
  constructor() {
    this.availableNumbers = usBingoNumbers.slice();
    this.calledNumbers = [];
  }
}

export class Card {
  constructor(numbers) {
    this.numbers = numbers;
  }
}

export function callNumber(game) {
  const availableNumbers = game.availableNumbers;
  const numbersLeft = availableNumbers.length;
  const calledNumber = availableNumbers[getRandomArbitrary(0, numbersLeft - 1)];
  const updatedGame = Object.assign({}, game);
  updatedGame.availableNumbers = updatedGame.availableNumbers.filter(
    number => number !== calledNumber
  );
  updatedGame.calledNumbers.push(calledNumber);
  return [calledNumber, updatedGame];
}
function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}
