function setup() {
  createCanvas(600, 600);
  noCursor();
}

function draw() {
  colorMode(RGB, 255);
  background(250, 100, 100);
  stroke(255, 240, 0);
  strokeWeight(5);

  //animating hue based on frameCount
  colorMode(HSB, 360, 100, 100);
  fill(frameCount % 360, 100, 100);
  ellipse(mouseX, mouseY, 100, 100);
}
