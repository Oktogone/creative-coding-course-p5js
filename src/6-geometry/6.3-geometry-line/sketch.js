function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250);

  //draw the line
  stroke(20);
  strokeWeight(5);
  line(100, 100, mouseX, mouseY);

  //draw red ellipses at the two ends of the line
  noStroke();
  fill(255, 0, 0);
  ellipse(100, 100, 20, 20);
  ellipse(mouseX, mouseY, 20, 20);
}
