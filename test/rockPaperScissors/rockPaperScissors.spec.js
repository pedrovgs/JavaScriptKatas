import {
  Gesture,
  Player,
  Result,
  whoWins
} from "../../src/rockPaperScissors/rockPaperScissors";

describe("Rock paper scissors spec", () => {
  const tests = [
    {
      p1: new Player("p1", Gesture.ROCK),
      p2: new Player("p2", Gesture.SCISSORS),
      expectedResult: Result.PLAYER_1_WINS
    },
    {
      p1: new Player("p1", Gesture.PAPER),
      p2: new Player("p2", Gesture.ROCK),
      expectedResult: Result.PLAYER_1_WINS
    },
    {
      p1: new Player("p1", Gesture.SCISSORS),
      p2: new Player("p2", Gesture.PAPER),
      expectedResult: Result.PLAYER_1_WINS
    },
    {
      p1: new Player("p1", Gesture.SCISSORS),
      p2: new Player("p2", Gesture.ROCK),
      expectedResult: Result.PLAYER_2_WINS
    },
    {
      p1: new Player("p1", Gesture.ROCK),
      p2: new Player("p2", Gesture.PAPER),
      expectedResult: Result.PLAYER_2_WINS
    },
    {
      p1: new Player("p1", Gesture.PAPER),
      p2: new Player("p2", Gesture.SCISSORS),
      expectedResult: Result.PLAYER_2_WINS
    }
  ];

  tests.forEach(testScenario => {
    const p1 = testScenario.p1;
    const p2 = testScenario.p2;
    const expectedResult = testScenario.expectedResult;
    it(`${p1.gesture.name} vs ${p2.gesture
      .name} should finish the game as ${expectedResult.name}`, () => {
      expect(whoWins(p1, p2)).to.equal(expectedResult);
    });
  });

  jsc.property(
    "returns draw if the gesture is the same",
    arbitraryGesture(),
    gesture => {
      const p1 = new Player("p1", gesture);
      const p2 = new Player("p2", gesture);
      return whoWins(p1, p2) === Result.DRAW;
    }
  );

  function arbitraryGesture() {
    return jsc.suchthat(
      jsc.oneof(
        jsc.constant(Gesture.ROCK),
        jsc.constant(Gesture.Paper),
        jsc.constant(Gesture.SCISSORS)
      ),
      gesture => typeof gesture !== "undefined"
    );
  }
});
