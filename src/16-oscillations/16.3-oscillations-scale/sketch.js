function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250);
  fill(20);
  translate(height * 0.5, height * 0.5);
  let angle = radians(frameCount);
  let size = map(sin(angle), -1, 1, 20, 300);
  ellipse(0, 0, size, size);
}
