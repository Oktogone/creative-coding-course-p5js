function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250, 100, 100, 50);
  stroke(255, 240, 0);
  strokeWeight(5);
  fill(0, 100, 255);
  ellipse(mouseX, mouseY, 100, 100);
}
