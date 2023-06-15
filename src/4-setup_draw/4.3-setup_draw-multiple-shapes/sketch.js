function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(20);

  //drawing two shapes on top of each other
  fill(255);
  ellipse(width * 0.5, height * 0.5, 100, 100);
  fill(255, 0, 0);
  ellipse(width * 0.5 + 50, height * 0.5 + 50, 100, 100);
}
