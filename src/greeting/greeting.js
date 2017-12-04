export function greet(name = "my friend") {
  if (isYelling(name)) {
    return `HELLO ${name}!`;
  } else {
    return `Hello, ${name}.`;
  }
}

function isYelling(name) {
  return name === name.toUpperCase();
}
