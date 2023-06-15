function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250);

  //draw curves
  stroke(20);
  noFill();
  beginShape();
  curveVertex(100, 200);
  curveVertex(100, 200);
  curveVertex(500, 300);
  curveVertex(300, 500);
  curveVertex(300, 500);
  endShape();

  //draw red ellipses at the control points
  noStroke();
  fill(255, 0, 0);
  ellipse(100, 200, 20, 20);
  ellipse(500, 300, 20, 20);
  ellipse(300, 500, 20, 20);
}
