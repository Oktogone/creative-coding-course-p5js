function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(20);
  noStroke();
  fill(255)

  //map the size of the ellipse to the position of the mouse
  let diam = map(mouseX, 0, height, 50, 300);
  //let diam = mouseX;
  ellipse(width * 0.5, height * 0.5, diam, diam);
}
