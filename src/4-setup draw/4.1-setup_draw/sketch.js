function setup() {
  createCanvas(600, 600);
}

function draw() {
  ellipse(mouseX, mouseY, 100, 100);
  console.log(frameCount);
}
