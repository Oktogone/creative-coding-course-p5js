function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250);

  //draw shape
  stroke(20);
  noFill();
  beginShape();
  vertex(150, 200);
  vertex(300, 100);
  vertex(450, 200);
  vertex(450, 400);
  vertex(300, 500);
  vertex(150, 400);
  vertex(150, 200);
  endShape();

  //draw red ellipses at the vertices
  noStroke();
  fill(255, 0, 0);
  ellipse(150, 200, 20, 20);
  ellipse(300, 100, 20, 20);
  ellipse(450, 200, 20, 20);
  ellipse(450, 400, 20, 20);
  ellipse(300, 500, 20, 20);
  ellipse(150, 400, 20, 20);
}
