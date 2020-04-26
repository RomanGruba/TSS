import isInSquare from "./";
import { SQUARE } from "typings";

describe("isInSquare", () => {
  it("returns true when value is in grid square", () => {
    const square: SQUARE = [
      [1, 4, 6],
      [3, 8, 9],
      [5, 7, 2],
    ];
    expect(isInSquare({ square, value: 1 })).toBeTruthy();
  });
});
