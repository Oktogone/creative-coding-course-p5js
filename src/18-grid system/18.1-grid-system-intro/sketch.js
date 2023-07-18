let rows, cols, cellH, cellW;

function setup() {
  createCanvas(600, 600);
  rows = 6;
  cols = 6;
  cellW = width / rows;
  cellH = height / cols;
}

function draw() {
  background(250);
  noFill();
  stroke(20);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW;
      let y = j * cellH;
      push();
      translate(x, y);
      rect(0, 0, cellW, cellH);
      pop();
    }
  }
}
