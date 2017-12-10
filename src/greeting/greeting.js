export function greet(...names) {
  names = splitNamesIfNeeded(names);
  if (isYelling(names)) {
    return yellingGreet(names);
  } else {
    const regularNames = names.filter(name => !isYelling(name));
    const yellingNames = names.filter(name => isYelling(name));
    if (regularNames.length > 0 && yellingNames.length > 0) {
      return yellingAndRegularGreet(regularNames, yellingNames);
    } else {
      return regularGreet(names);
    }
  }
}

function splitNamesIfNeeded(names) {
  if (typeof names === void 0 || names.length === 0) {
    return names;
  }
  return names.map(name => splitName(name)).reduce(function(a, b) {
    return a.concat(b);
  });
}

function splitName(name) {
  if (isAQuote(name)) {
    name = name.split('"').join("");
    return [name];
  } else {
    return name.split(",");
  }
}

function isAQuote(name) {
  return name.match('"*"') !== null;
}

function yellingGreet(names) {
  return `HELLO ${names}!`;
}

function regularGreet(names) {
  return `Hello, ${joinNames(names)}.`;
}

function yellingAndRegularGreet(regularNames, yellingNames) {
  return `${regularGreet(regularNames)} AND ${yellingGreet(yellingNames)}`;
}

function isYelling(names) {
  let isDefined = typeof names !== void 0;
  let isAnArray = Array.isArray(names);
  if (isDefined && isAnArray && names.length > 0) {
    return names.every(name => name === `${name}`.toUpperCase());
  } else if (isDefined && !isAnArray) {
    return names === names.toUpperCase();
  } else {
    return false;
  }
}

function joinNames(names) {
  if (typeof names === "undefined" || names.length === 0) {
    return "my friend";
  } else if (names.length === 1) {
    return names;
  } else if (names.length === 2) {
    return names.join(" and ");
  } else {
    const firstNames = names.slice(0, names.length - 1).join(", ");
    return `${firstNames}, and ${names[names.length - 1]}`;
  }
}
