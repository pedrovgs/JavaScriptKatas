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

export class KarumiHQs {
  constructor(chat = new ConsoleChat()) {
    this.chat = chat;
    this.maxibonsLeft = 10;
  }

  openFridge(devs) {
    if (Array.isArray(devs)) {
      openFridge(devs, this);
    } else {
      openFridge([devs], this);
    }
  }
}

function openFridge(devs, office) {
  devs.forEach(dev => {
    office.maxibonsLeft = Math.max(0, office.maxibonsLeft - dev.maxibonsToGrab);
    if (office.maxibonsLeft <= 2) {
      office.maxibonsLeft += 10;
      office.chat.sendMessage(
        `Hi guys, I'm ${dev.name}. We need more maxibons!`
      );
    }
  });
}

class ConsoleChat {
  sendMessage(message) {
    console.log(message); // eslint-disable-line
  }
}
