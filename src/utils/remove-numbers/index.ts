import { GRID } from "typings";
import { getRandomIndex } from "utils";

function removeNumbers(grid: GRID, attempts = 5): GRID {
  while (attempts > 0) {
    let row = getRandomIndex();
    let col = getRandomIndex();

    while (grid[row][col] === 0) {
      row = getRandomIndex();
      col = getRandomIndex();
    }
    const backup = grid[row][col];
    grid[row][col] = 0;
  }

  return grid;
}

export default removeNumbers;
