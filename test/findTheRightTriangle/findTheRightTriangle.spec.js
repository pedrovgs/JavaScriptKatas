import findTheRightTriangles from "../../src/findTheRigthTriangle/findTheRightTriangle";

describe("Find the right triangle spec", () => {
  it("returns a non empty array because right triangles exist", () => {
    const triangles = findTheRightTriangles();

    expect(triangles).to.not.have.lengthOf(0);
  });

  it("every side of each triangle is less than or equal to 10", () => {
    const triangles = findTheRightTriangles();

    triangles.every(
      triangle => triangle[0] <= 10 && triangle[1] <= 1 && triangle[2] <= 10
    );
  });

  it("the perimeter of every triangle is equal to 24", () => {
    const triangles = findTheRightTriangles();

    triangles.every(triangle => triangle[0] + triangle[1] + triangle[2] === 24);
  });

  it("every triangle is a right triangle", () => {
    const triangles = findTheRightTriangles();

    triangles.every(
      triangle =>
        Math.pow(triangle[0], 2) + Math.pow(triangle[1], 2) ===
        Math.pow(triangle[2], 2)
    );
  });
});
