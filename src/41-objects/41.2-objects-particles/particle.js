class Particle{

  constructor(){
    this.x = random(0, width);
    this.y = random(0, width);
    this.c = color(random(255));
    this.diameter = random(2, 10);
  }

  drawParticle(){
    fill(this.c);
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
