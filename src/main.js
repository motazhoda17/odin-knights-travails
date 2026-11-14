// Driver script: runs the examples from the Odin lesson.
import knightMoves from './knightMoves.js';
import printPath from './printPath.js';

const examples = [
  [[0, 0], [1, 2]],
  [[0, 0], [3, 3]],
  [[3, 3], [0, 0]],
  [[0, 0], [7, 7]],
  [[3, 3], [4, 3]],
  [[5, 5], [5, 5]], // same square: zero moves
];

examples.forEach(([start, end]) => {
  console.log(`> knightMoves([${start}],[${end}])`);
  const path = knightMoves(start, end);
  // The return value is the path itself, as the lesson asks for...
  console.log('returns', JSON.stringify(path));
  // ...and printPath shows it in the lesson's friendly format.
  printPath(path);
  console.log();
});

// Invalid squares are rejected instead of silently looping.
try {
  knightMoves([0, 0], [8, 8]);
} catch (error) {
  console.log(`> knightMoves([0,0],[8,8])\nError: ${error.message}`);
}
