let marginX, marginY, drawWidth, drawHeight;
let rows, cols, cellH, cellW;
let noiseScaleXY, noiseScaleZ;

function setup() {
  createCanvas(600, 600);
  rows = 30;
  cols = 30;
  marginX = 50;
  marginY = 50;
  drawWidth = width - 2 * marginX;
  drawheight = height - 2 * marginY;
  cellW = drawWidth / cols;
  cellH = drawheight / rows;
  noiseScaleXY = 0.05;
  noiseScaleZ = 0.15;
}

function draw() {
  background(20);
  noFill();
  stroke(250);
  strokeWeight(1.8);
  translate(marginX, marginY);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let localX = i * cellW + cellW * 0.5;
      let localY = j * cellH + cellH * 0.5;
      let d = dist(mouseX, mouseY, localX, localY);
      let scaleFactor = map(d, 0, 600, 0.8, 0);
      push();
      translate(localX, localY);
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
