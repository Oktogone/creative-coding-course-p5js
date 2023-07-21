let mic;

function setup() {
  createCanvas(600, 600);
  mic = new p5.AudioIn();
  mic.start();
}

function draw(){
  background(250);
  fill(20);
  let level = mic.getLevel();
  let diameter = map(level, 0, 1, 50, 300);
  ellipse(width * 0.5, height * 0.5, diameter, diameter);
}
