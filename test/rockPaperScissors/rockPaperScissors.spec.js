import {
  Gesture,
  Player,
  Result,
  whoWins
} from "../../src/rockPaperScissors/rockPaperScissors";

describe("Rock paper scissors spec", () => {
  it("rock beat scissors", () => {
    const p1 = new Player("p1", Gesture.ROCK);
    const p2 = new Player("p2", Gesture.SCISSORS);

    expect(whoWins(p1, p2)).to.equal(Result.PLAYER_1_WINS);
  });
});
