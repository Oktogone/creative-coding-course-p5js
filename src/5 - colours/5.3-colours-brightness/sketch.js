function setup() {
  createCanvas(600, 600);
  noCursor();
}

function draw() {
  colorMode(RGB, 255);
  background(250, 100, 100);
  stroke(255, 240, 0);
  strokeWeight(5);

  //animating brightness based on mouseY
  colorMode(HSB, 360, 100, 100);
  fill(220, 100, mouseY / 6);
  ellipse(mouseX, mouseY, 100, 100);
}
