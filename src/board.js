// The board is an 8x8 grid with coordinates [x, y] from 0 to 7.
export const BOARD_SIZE = 8;

// The 8 ways a knight can move: two squares one way, one square the other.
const KNIGHT_OFFSETS = [
  [1, 2], [2, 1], [2, -1], [1, -2],
  [-1, -2], [-2, -1], [-2, 1], [-1, 2],
];

export const isOnBoard = ([x, y]) =>
  Number.isInteger(x) && Number.isInteger(y) &&
  x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE;

// Returns every square a knight can legally reach from `square`.
// These are the "edges" of our graph: we never build the whole graph,
// we just work out a square's neighbours when we need them.
export const getKnightMoves = ([x, y]) =>
  KNIGHT_OFFSETS
    .map(([dx, dy]) => [x + dx, y + dy])
    .filter(isOnBoard); // throw away moves that fall off the board
