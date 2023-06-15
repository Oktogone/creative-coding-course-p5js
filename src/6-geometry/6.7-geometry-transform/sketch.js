function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(250);

  //rotate and draw the rectangle
  rotate(frameCount);
  fill(20);
  rect(width * 0.5, height * 0.5, 20, 300);
  pop();
}
