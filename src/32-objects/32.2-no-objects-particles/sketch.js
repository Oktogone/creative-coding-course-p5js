let particle;

function setup() {
  createCanvas(600, 600);

  particle = {
    x: 300,
    y: 400,
    diam: 30,
    colour: color(250, 100, 0)
  };
}

function draw() {
  background(20);
  fill(particle.colour);
  noStroke();
  ellipse(particle.x, particle.y, particle.diam, particle.diam);
}
