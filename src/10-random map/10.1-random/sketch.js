function setup() {
  createCanvas(600, 600);
  frameRate(2);
}

function draw() {
  background(20);
  noStroke();
  fill(250);

  //draw an ellipse at a random position
  let x = random(50, width - 50);
  let y = random(50, height - 50);
  ellipse(x, y, 100, 100);
}
