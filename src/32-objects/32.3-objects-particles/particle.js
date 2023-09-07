class Particle{

  constructor(){
    this.x = random(50, width - 50);
    this.y = random(50, height - 50);
    this.colour = color(random(255), random(255), random(255));
    this.diam = random(20, 60);
  }

}
