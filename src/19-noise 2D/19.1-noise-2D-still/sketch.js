let rows, cols, cellH, cellW;
let noiseScale;

function setup() {
  createCanvas(600, 600);
  rows = 20;
  cols = 20;
  cellW = width / rows;
  cellH = height / cols;
  noiseScale = 0.15;
}

function draw() {
  background(250);
  noStroke();
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let n = noise(i, j);
      let brightness = n * 255;
      push();
      translate(i * cellW, j * cellH);
      fill(brightness);
      rect(0, 0, cellW, cellH);
      pop();
    }
  }
}
