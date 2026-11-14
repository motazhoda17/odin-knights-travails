import { getKnightMoves, isOnBoard } from './board.js';

// Arrays can't be compared with === (two [1,2] arrays are different
// objects), so we turn squares into strings like "1,2" for lookups.
const key = ([x, y]) => `${x},${y}`;

// Finds the shortest path from start to end and returns it as an
// array of squares, e.g. [[0,0],[1,2]].
//
// Why breadth-first search? BFS explores every square 1 move away,
// then every square 2 moves away, and so on. So the first time it
// reaches `end`, it got there in the fewest possible moves.
// (DFS would dive down one long path first and could loop forever
// without extra bookkeeping.)
export default function knightMoves(start, end) {
  if (!isOnBoard(start) || !isOnBoard(end)) {
    throw new Error('Both squares must be [x, y] with x and y from 0 to 7');
  }

  const queue = [start];
  // cameFrom remembers which square we jumped from to reach each square.
  // It also doubles as our "visited" list so we never revisit a square.
  const cameFrom = new Map([[key(start), null]]);

  while (queue.length > 0) {
    const current = queue.shift();

    if (key(current) === key(end)) {
      // Walk backwards from end to start using cameFrom, then flip it.
      const path = [];
      let step = current;
      while (step !== null) {
        path.push(step);
        step = cameFrom.get(key(step));
      }
      return path.reverse();
    }

    for (const next of getKnightMoves(current)) {
      if (!cameFrom.has(key(next))) {
        cameFrom.set(key(next), current);
        queue.push(next);
      }
    }
  }

  // A knight can reach every square on an 8x8 board, so we never get here.
  return null;
}
