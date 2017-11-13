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

export function whoWins(player1, player2) {
  const match = [player1.gesture, player2.gesture];
  const player1WinsResults = [
    [Gesture.ROCK, Gesture.SCISSORS],
    [Gesture.SCISSORS, Gesture.PAPER],
    [Gesture.PAPER, Gesture.ROCK]
  ];
  const player2WinsResult = player2WinsResult.map(result => result.reverse());
  if (player1WinsResults.includes(match)) {
    return Result.PLAYER_1_WINS;
  } else if (player2WinsResult.includes(match)) {
    return Result.PLAYER_2_WINS;
  } else {
    return Result.DRAW;
  }
}
