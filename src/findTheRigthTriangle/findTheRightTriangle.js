function findRightTriangles() {
  const triangles = [];
  for (let c = 1; c <= 10; c++) {
    for (let a = 1; a <= c; a++) {
      for (let b = 1; b <= a; b++) {
        if (isRightTriangle(a, b, c)) {
          triangles.push([a, b, c]);
        }
      }
    }
  }
  return triangles;
}

function isRightTriangle(a, b, c) {
  return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) && a + b + c === 24;
}

export default findRightTriangles;
