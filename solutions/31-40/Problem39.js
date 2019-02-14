// Problem 39
//
// This problem was asked by Dropbox.
//
// Conway's Game of Life takes place on an infinite two-dimensional board of square cells. Each cell is either dead or alive, and at each tick, the following rules apply:
//
// Any live cell with less than two live neighbours dies.
// Any live cell with two or three live neighbours remains living.
// Any live cell with more than three live neighbours dies.
// Any dead cell with exactly three live neighbours becomes a live cell.
// A cell neighbours another cell if it is horizontally, vertically, or diagonally adjacent.
//
// Implement Conway's Game of Life.
// It should be able to be initialized with a starting list of live cell coordinates and the number of steps it should run for.
// Once initialized, it should print out the board state at each step.
// Since it's an infinite board, print out only the relevant coordinates, i.e. from the top-leftmost live cell to bottom-rightmost live cell.
//
// You can represent a live cell with an asterisk (*) and a dead cell with a dot (.).
//
// https://leetcode.com/problems/game-of-life/

/**
 * Returns a board with liveCells
 * @param {number[][]} liveCells
 * @return {string[][]}
 */
function createBoard(liveCells) {
  let xMax = Number.MIN_SAFE_INTEGER;
  let yMax = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < liveCells.length; i++) {
    const [x, y] = liveCells[i];
    xMax = Math.max(xMax, x);
    yMax = Math.max(yMax, y);
  }

  const board = [...Array(xMax + 1)].map(() => Array(yMax + 1).fill('.'));
  for (let i = 0; i < liveCells.length; i++) {
    const [x, y] = liveCells[i];
    board[x][y] = '*';
  }
  return board;
}

/**
 * Prints the board at this state
 * @param {number[][]} liveCells
 */
function printBoard(liveCells) {
  if (liveCells.length === 0) {
    console.log('.');
    return;
  }

  const board = createBoard(liveCells);

  let result = '';
  for (let r = 0; r < board.length; r++) {
    const row = board[r];
    result += `${row.join(' ')}\n`;
  }
  console.log(result);
}

/**
 * Go through one cycle of life
 * @param {number[][]} liveCells
 * @return {number[][]}
 */
function iterate(liveCells) {
  const board = createBoard(liveCells);
  const newLiveCells = [];
  const dir = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ];

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      let aliveNeighbors = 0;
      for (let i = 0; i < dir.length; i++) {
        const cellR = r + dir[i][0];
        const cellC = c + dir[i][1];
        if (
          cellR >= 0 &&
          cellC >= 0 &&
          cellR < board.length &&
          cellC < board[0].length &&
          board[cellR][cellC] === '*'
        ) {
          aliveNeighbors++;
        }
      }

      if (aliveNeighbors === 3) newLiveCells.push([r, c]);

      const alive = board[r][c] === '*';
      if (alive && aliveNeighbors === 2) newLiveCells.push([r, c]);
    }
  }

  return newLiveCells;
}

/**
 * Start with live cells. At each step, go through one iteration of life and prints the board
 * @param {number[][]} liveCells
 * @param {number} steps
 */
function gameOfLife(liveCells, steps) {
  printBoard(liveCells);
  for (let i = 0; i < steps; i++) {
    liveCells = iterate(liveCells);
    printBoard(liveCells);
  }
}

export default gameOfLife;
