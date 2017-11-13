import { Enum } from "enumify";

export class Gesture extends Enum {}
Gesture.initEnum(["PAPER", "ROCK", "SCISSORS"]);

export class Player {
  constructor(name, gesture) {
    this.name = name;
    this.gesture = gesture;
  }
}

export class Result extends Enum {}
Result.initEnum(["PLAYER_1_WINS", "PLAYER_2_WINS", "DRAW"]);

const player1WinsResults = [
  [Gesture.ROCK, Gesture.SCISSORS],
  [Gesture.SCISSORS, Gesture.PAPER],
  [Gesture.PAPER, Gesture.ROCK]
];
const player2WinsResults = player1WinsResults.slice().reverse();

export function whoWins(player1, player2) {
  const match = [player1.gesture, player2.gesture];
  if (winsPlayer1(match)) {
    return Result.PLAYER_1_WINS;
  } else if (winsPlayer2(match)) {
    return Result.PLAYER_2_WINS;
  } else {
    return Result.DRAW;
  }
}

function winsPlayer1(match) {
  return wins(player1WinsResults, match);
}

function winsPlayer2(match) {
  return wins(player2WinsResults, match);
}

function wins(winningGames, match) {
  return winningGames.some(possibleGame =>
    possibleGame.every((v, i) => v === match[i])
  );
}
