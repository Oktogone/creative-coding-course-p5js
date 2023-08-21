function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(20);

  //drawing two shapes on top of each other
  ellipse(mouseX, mouseY, 100, 100);
  //ellipse(0, 0, 100, 100);
  ellipse(width * 0.5, height * 0.5, 100, 100);
}
