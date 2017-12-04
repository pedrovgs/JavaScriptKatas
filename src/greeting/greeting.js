export function greet(...name) {
  if (isYelling(name)) {
    return `HELLO ${name}!`;
  } else {
    name = name.join(" and ");
    if (name.length === 0) {
      name = "my friend";
    }
    return `Hello, ${name}.`;
  }
}

function isYelling(names) {
  if (names && names.length > 0) {
    return names.every(name => name === name.toUpperCase());
  } else {
    return false;
  }
}
