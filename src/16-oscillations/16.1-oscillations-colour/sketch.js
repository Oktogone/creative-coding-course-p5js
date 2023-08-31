function setup() {
  createCanvas(600, 600);
}

function draw() {
  drawOsc();
}

function drawOsc() {
  translate(height * 0.5, height * 0.5);
  let angle = radians(frameCount);
  let grey = map(sin(angle), -1, 1, 0, 255);
  let oppositeGrey = map(cos(angle), -1, 1, 0, 255);
  fill(grey);
  noStroke();
  background(oppositeGrey);
  ellipse(0, 0, 200, 200);
}

function drawRandom(){
  translate(height * 0.5, height * 0.5);
  noStroke();
  background(random(255));
  fill(random(255));
  ellipse(0, 0, 200, 200);
}
