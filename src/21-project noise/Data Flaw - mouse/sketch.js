//Sketch inspired by the creation of
//https://romain-astouric.com/

let rows, cols, cellH, cellW;
let margin, drawWidth, drawHeight;
let noiseScaleXY, noiseScaleZ;

function setup() {
  createCanvas(600, 600);

  rows = 30;
  cols = 30;
  margin = 50;
  drawWidth = width - 2 * margin;
  drawHeight = height - 2 * margin;
  cellW = drawWidth / cols;
  cellH = drawHeight / rows;

  noiseScaleXY = 0.05;
  noiseScaleZ = 0.15;
}

function draw() {
  background(20);

  noFill();
  stroke(250);
  strokeWeight(1.8);
  translate(margin, margin);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW + cellW * 0.5;
      let y = j * cellH + cellH * 0.5;
      let d = dist(mouseX, mouseY, x, y);
      let scaleFactor = map(d, 0, width, 0.8, 0);
      push();
      translate(x, y);
      scale(scaleFactor);
      drawHexagon();
      pop();
    }
  }
}

function drawHexagon(){
  beginShape(TESS);
  vertex(0, cellH*0.8);
  vertex(0, cellH*0.2);
  vertex(cellW*0.5, 0);
  vertex(cellW, cellH*0.2);
  vertex(cellW, cellH*0.8);
  vertex(cellW*0.5, cellH);
  vertex(0, cellH*0.8);
  endShape();
}
