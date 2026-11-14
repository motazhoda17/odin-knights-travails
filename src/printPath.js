// Formats a path the way the Odin lesson shows it:
//   You made it in 3 moves!  Here's your path:
//     [3,3]
//     [4,5]
//     ...
export default function printPath(path) {
  const moves = path.length - 1; // moves = jumps between squares
  const lines = path.map(([x, y]) => `  [${x},${y}]`);
  console.log(
    `=> You made it in ${moves} move${moves === 1 ? '' : 's'}!  Here's your path:`,
  );
  console.log(lines.join('\n'));
}
