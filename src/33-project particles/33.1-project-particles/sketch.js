let nbreParticles;
let particles;

function setup() {
  createCanvas(600, 600);

  nbreParticles = 50;
  particles = [];
  for(let i = 0; i < nbreParticles; i++){
    p = new Particle();
    particles.push(p);
  }
}

function draw() {
  background(20);
  for(let i = 0; i < particles.length; i++){
    p = particles[i];
    p.updateParticle();
    p.drawParticle();
  }
}
