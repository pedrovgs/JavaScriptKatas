export function greet(...name) {
  if (isYelling(name)) {
    return `HELLO ${name}!`;
  } else {
    return `Hello, ${joinNames(name)}.`;
  }
}

function isYelling(names) {
  if (typeof names !== "undefined" && names.length > 0) {
    return names.every(name => name === `${name}`.toUpperCase());
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
