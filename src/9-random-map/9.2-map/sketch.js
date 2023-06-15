function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(20);
  noStroke();
  fill(255)

  //map the size of the ellipse to the position of the mouse
  let size = map(mouseY, 0, height, 40, 300);
  //let size = mouseY;
  ellipse(width * 0.5, height * 0.5, size, size);
}
