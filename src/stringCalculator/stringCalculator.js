function add(value) {
  if (value.length === 0) {
    return 0;
  } else {
    const sum = value
      .split(",")
      .reduce((acc, value) => parseInt(acc) + parseInt(value));
    return parseInt(sum);
  }
}

export default add;
