export class Developer {
  constructor(name, maxibonsToGrab) {
    this.name = name;
    this.maxibonsToGrab = Math.max(0, maxibonsToGrab);
  }
}
