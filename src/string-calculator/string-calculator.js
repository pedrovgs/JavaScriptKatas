function add(value) {
  if (containsCustomDelimiter(value)) {
    const customDelimiter = extractCustomDelimiter(value);
    return addWithDelimiters(removeCustomDelimiter(value, customDelimiter), [
      customDelimiter
    ]);
  } else {
    return addWithDelimiters(value, [",", "\n"]);
  }
}

function containsCustomDelimiter(value) {
  return value.startsWith("//");
}

function extractCustomDelimiter(value) {
  return value.split("//")[1][0];
}

function removeCustomDelimiter(value, delimiter) {
  const startIndex = value.indexOf(delimiter);
  return value.substring(startIndex + 1, value.length);
}

function addWithDelimiters(value, delimiters) {
  if (!value) {
    return 0;
  }
  const fixedDelimiter = " ";
  const sum = unifyDelimiters(value, fixedDelimiter, delimiters)
    .split(fixedDelimiter)
    .map(value => parseInt(value))
    .filter(value => Number.isInteger(value))
    .reduce((acc, value) => parseInt(acc) + parseInt(value));
  return parseInt(sum);
}

function unifyDelimiters(value, fixedDelimiter, delimiters) {
  let unifiedDelimitersValue = value;
  delimiters.forEach(d => {
    unifiedDelimitersValue = unifiedDelimitersValue
      .split(d)
      .join(fixedDelimiter);
  });
  return unifiedDelimitersValue;
}

export default add;
