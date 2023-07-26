function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(20);
  ellipse(mouseX, mouseY, 100, 100);
  console.log(mouseX, mouseY);
  console.log(frameCount);
}
