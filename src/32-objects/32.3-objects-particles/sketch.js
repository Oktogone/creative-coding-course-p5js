let particle;

function setup() {
  createCanvas(600, 600);

  particle = new Particle();
}

function draw() {
  background(20);
  fill(particle.colour);
  noStroke();
  ellipse(particle.x, particle.y, particle.diam, particle.diam);
}
