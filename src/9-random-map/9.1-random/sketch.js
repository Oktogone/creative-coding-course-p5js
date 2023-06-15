function setup() {
  createCanvas(600, 600);
  frameRate(2);
}

function draw() {
  background(20);
  noStroke();
  fill(255)

  //draw an ellipse at a random position
  let x = random(30, width);
  let y = random(30, height);
  ellipse(x, y, 100, 100);
}
