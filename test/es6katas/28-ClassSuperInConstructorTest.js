// 28: class - super in constructor
// To do: make all tests pass, leave the assert lines unchanged!

describe("class", () => {
  it("if you `extend` a class, use `super()` to call the parent constructor", () => {
    class A {
      constructor() {
        this.levels = 1;
      }
    }
    class B extends A {
      constructor() {
        super();
        this.levels++;
      }
    }

    assert.equal(new B().levels, 2);
  });

  it("`super()` may also take params", () => {
    class A {
      constructor(startValue = 1, addTo = 1) {
        this.counter = startValue + addTo;
      }
    }
    class B extends A {
      constructor(...args) {
        super(...args);
        this.counter++;
      }
    }

    assert.equal(new B(42, 2).counter, 45);
  });

  it("it is important where you place your `super()` call!", () => {
    class A {
      inc() {
        this.countUp = 1;
      }
    }
    class B extends A {
      inc() {
        this.countUp = 2;
        super.inc();
        return this.countUp;
      }
    }

    assert.equal(new B().inc(), 1);
  });
});
