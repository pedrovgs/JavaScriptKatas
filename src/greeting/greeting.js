function joinNames(name) {
    name = name.join(" and ");
    if (name.length === 0) {
        name = "my friend";
    }
    return name;
}

export function greet(...name) {
  if (isYelling(name)) {
    return `HELLO ${name}!`;
  } else {
    return `Hello, ${joinNames(name)}.`;
  }
}

function isYelling(names) {
  if (names && names.length > 0) {
    return names.every(name => name === name.toUpperCase());
  } else {
    return false;
  }
}
