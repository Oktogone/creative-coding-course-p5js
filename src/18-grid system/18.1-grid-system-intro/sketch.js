let rows, cols, cellH, cellW;

function setup() {
  createCanvas(600, 600);
  rows = 6;
  cols = 6;
  cellW = width / cols;
  cellH = height / rows;
}

function draw() {
  background(250);
  noFill();
  stroke(20);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW;
      let y = j * cellH;
      rect(x, y, cellW, cellH);
    }
  }
}
