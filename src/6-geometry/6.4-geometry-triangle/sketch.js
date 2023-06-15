function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250);

  //draw the triangle
  stroke(20);
  noFill();
  strokeWeight(5);
  triangle(100, 100, 500, 100, 300, 500);

  //draw red ellipses at the two ends of the line
  noStroke();
  fill(255, 0, 0);
  ellipse(100, 100, 20, 20);
  ellipse(500, 100, 20, 20);
  ellipse(300, 500, 20, 20);
}
