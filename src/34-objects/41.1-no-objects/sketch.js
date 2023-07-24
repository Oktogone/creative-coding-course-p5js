let nbreParticles;

function setup() {
  createCanvas(600, 600);
  posx = width * 0.5;
  posy = height * 0.5;
  nbreParticles = 100;
}

function draw() {
  background(20);
  fill(250);
  noStroke();
  for(let i = 0; i < nbreParticles; i++){
    ellipse(random(0, width), random(0, height), 10, 10);
  }
  noLoop();
}
