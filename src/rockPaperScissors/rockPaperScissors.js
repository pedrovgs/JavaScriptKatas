import { Enum } from "enumify";

export class Gesture extends Enum {}
Gesture.initEnum(["ROCK", "PAPER", "SCISSORS"]);

export class Player {
  constructor(name, gesture) {
    this.name = name;
    this.gesture = gesture;
  }
}

export class Result extends Enum {}
Result.initEnum(["PLAYER_1_WINS", "PLAYER_2_WINS", "DRAW"]);

export function whoWins(player1, player2) {
  return Result.DRAW;
}
