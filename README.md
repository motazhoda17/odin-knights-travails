# Knights Travails

Finds the shortest path a chess knight can take between any two squares,
built for [The Odin Project – Knights Travails](https://www.theodinproject.com/lessons/javascript-knights-travails).

```
> knightMoves([3,3],[4,3])
=> You made it in 3 moves!  Here's your path:
  [3,3]
  [4,5]
  [6,4]
  [4,3]
```

## Features

- `knightMoves(start, end)` returns the shortest path as an array of squares, e.g. `[[0,0],[1,2]]`
- Uses breadth-first search, so the first path found is always a shortest one
- Treats the board as an implicit graph: each square's neighbours are worked out on the fly
- Never lets the knight leave the 8x8 board and never revisits a square (no endless loops)
- Throws an error for squares outside the board
- `printPath(path)` prints the result in the lesson's format

## How to run

Requires Node.js 18 or newer. No dependencies to install.

```bash
npm start      # or: node src/main.js
```

## Project structure

```
src/
  board.js        # board size, isOnBoard, getKnightMoves
  knightMoves.js  # the BFS search
  printPath.js    # pretty output
  main.js         # driver script with the lesson's examples
```

## What I practiced

- Modelling a problem as a graph (squares = vertices, knight moves = edges)
- Breadth-first search with a queue, and why BFS finds the shortest path
- Tracking visited nodes and parent links to rebuild the path at the end
- Using string keys (`"x,y"`) in a `Map` because arrays can't be compared with `===`
