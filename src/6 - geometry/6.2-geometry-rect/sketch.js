function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background(250);

  fill(20);
  rect(width * 0.5, height * 0.5, 100, 100);

  fill(255, 0, 0);
  ellipse(width * 0.5, height * 0.5, 10, 10);
}
