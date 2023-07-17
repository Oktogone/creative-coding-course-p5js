function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(250);

  //rotate and draw the moving rectangle
  push();
  translate(width * 0.5, height * 0.5);
  rotate(radians(frameCount));
  fill(20);
  rect(0, 0, 20, 300);
  pop();

  //draw the fixed rectangle
  fill(255, 0, 0);
  ellipse(width * 0.5, height * 0.5, 100, 100);
}
