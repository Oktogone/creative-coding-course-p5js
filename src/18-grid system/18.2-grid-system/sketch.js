let rows, cols, cellH, cellW;

function setup() {
  createCanvas(600, 600);
  rows = 5;
  cols = 5;
  cellW = width / rows;
  cellH = height / cols;
  frameRate(1);
}

function draw() {
  background(20);
  noStroke();
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW;
      let y = j * cellH;
      push();
      translate(x, y);
      drawShape();
      pop();
    }
  }
}

function drawShape(){
  let shapeSelector = int(random(3));
  if(shapeSelector == 0){
    fill(20);
    ellipse(0, 0, cellW, cellH);
    fill(250);
    rect(0, 0, cellW, cellH);
  }
  else if(shapeSelector == 1){
    fill(20);
    rect(0, 0, cellW, cellH);
    fill(250);
    ellipse(0, 0, cellW, cellH);
  }
}
