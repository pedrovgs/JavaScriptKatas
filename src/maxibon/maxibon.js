export class Developer {
  constructor(name, maxibonsToGrab) {
    this.name = name;
    this.maxibonsToGrab = Math.max(0, maxibonsToGrab);
  }
}

export const Pedro = new Developer("Pedro", 3);
export const Fran = new Developer("Fran", 1);
export const Davide = new Developer("Davide", 0);
export const Sergio = new Developer("Sergio", 2);
export const Jorge = new Developer("Jorge", 1);
