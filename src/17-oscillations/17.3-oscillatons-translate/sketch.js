function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250);
  fill(20);
  translate(height * 0.5, height * 0.5);
  let angle = radians(frameCount);
  ellipse(width * 0.5 * sin(angle), 0, 200, 200);
}
