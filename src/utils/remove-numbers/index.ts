import { GRID } from "typings";
import { copyGrid, getRandomIndex, solveGrid } from "utils";
import global from "global";

function removeNumbers(grid: GRID, attempts = 1): GRID {
  while (attempts > 0) {
    let row = getRandomIndex();
    let col = getRandomIndex();

    while (grid[row][col] === 0) {
      row = getRandomIndex();
      col = getRandomIndex();
    }
    const backup = grid[row][col];
    grid[row][col] = 0;

    const gridCopy = copyGrid(grid);
    global.counter = 0;
    solveGrid(gridCopy);
    // console.log(gridCopy);

    if (global.counter !== 1) {
      grid[row][col] = backup;
      attempts--;
    }
  }

  return grid;
}

export default removeNumbers;
