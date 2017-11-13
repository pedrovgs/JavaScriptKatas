export const usBingoNumbers = [...Array(75).keys()].map(key => key + 1);

export class Game {
  constructor(availableNumbers, calledNumbers) {
    this.availableNumbers = availableNumbers;
    this.calledNumbers = calledNumbers;
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
  const calledNumber = availableNumbers[generateRandomInt(0, numbersLeft - 1)];
  const updatedGame = Object.assign({}, game);
  updatedGame.availableNumbers = updatedGame.availableNumbers.filter(
    number => number !== calledNumber
  );
  updatedGame.calledNumbers.push(calledNumber);
  return [calledNumber, updatedGame];
}

export function generateGame() {
  return new Game(usBingoNumbers.slice(), []);
}

export function generateCard() {
  let cardPossibleNumbers = usBingoNumbers.slice();
  const cardNumbers = [];
  for (let i = 0; i < 24; i++) {
    const cardNumberIndex = generateRandomInt(0, cardPossibleNumbers.length);
    const cardNumber = cardPossibleNumbers[cardNumberIndex];
    cardPossibleNumbers = cardPossibleNumbers.filter(x => x !== cardNumber);
    cardNumbers.push(cardNumber);
  }
  return new Card(cardNumbers);
}

export function isWinnerCard(card, game) {
  return card.numbers.every(number => game.calledNumbers.includes(number));
}

function generateRandomInt(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}
