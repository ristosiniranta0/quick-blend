// filename: complexCode.js

/*
This code generates a complex and elaborate maze using a recursive backtracking algorithm.
The maze is represented as a 2D array and can be visualized in the console.
The algorithm starts from a random cell and carves out a path through the maze until it reaches the end.
The maze is designed to have dead ends and multiple paths to make it more complex and interesting.
*/

// Constants for maze dimensions and directions
const WIDTH = 20;
const HEIGHT = 10;
const DIRECTIONS = {
  UP: [0, -1],
  DOWN: [0, 1],
  LEFT: [-1, 0],
  RIGHT: [1, 0]
};

// Initialize the maze with walls
let maze = [];
for (let row = 0; row < HEIGHT; row++) {
  maze[row] = [];
  for (let col = 0; col < WIDTH; col++) {
    maze[row][col] = {
      visited: false,
      walls: [true, true, true, true] // [top, right, bottom, left]
    };
  }
}

// Generate the maze starting from a random cell
let startRow = Math.floor(Math.random() * HEIGHT);
let startCol = Math.floor(Math.random() * WIDTH);
generateMaze(startRow, startCol);

// Function to generate the maze
function generateMaze(row, col) {
  maze[row][col].visited = true;

  // Shuffle the directions for random traversal
  let directions = Object.values(DIRECTIONS).sort(() => Math.random() - 0.5);

  for (let i = 0; i < directions.length; i++) {
    let [dx, dy] = directions[i];
    let newRow = row + dy;
    let newCol = col + dx;

    // Check if the new cell is within bounds and not visited
    if (newRow >= 0 && newRow < HEIGHT && newCol >= 0 && newCol < WIDTH && !maze[newRow][newCol].visited) {
      // Carve a path by removing walls between current and new cell
      maze[row][col].walls[i] = false;
      maze[newRow][newCol].walls[(i + 2) % 4] = false;

      // Recursively generate the maze from the new cell
      generateMaze(newRow, newCol);
    }
  }
}

// Print the maze in the console
for (let row = 0; row < HEIGHT; row++) {
  let line = "";
  for (let col = 0; col < WIDTH; col++) {
    let cell = maze[row][col];
    let symbol = cell.visited ? " " : "#";

    let walls = [
      cell.walls[0] ? "###" : "# #",
      cell.walls[3] ? "#" : " ",
      "#   ",
      cell.walls[1] ? "#" : " ",
      "# #"
    ];

    line += walls.join("") + symbol;
  }
  console.log(line);
}