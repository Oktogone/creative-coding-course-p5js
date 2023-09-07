class Particle{

  constructor(){
    this.x = random(0, width);
    this.y = random(0, width);

    this.vx = random(-0.5, 0.5);
    this.vy = random(-0.5, 0.5);
  }

  updateParticle(){
    this.x += this.vx;
    this.y += this.vy;
    if (this.x > width) this.x = 0;
    if (this.x < 0) this.x = width;
    if (this.y > height) this.y = 0;
    if (this.y < 0) this.y = height;

    for(let i = 0; i < particles.length; i++){
      let p = particles[i];
      let d = dist(this.x, this.y, p.x, p.y);
      if(d < 60){
        strokeWeight(0.8);
        stroke(250);
        line(this.x, this.y, p.x, p.y);
      }
      else if(d >=60 && d < 90){
        strokeWeight(0.5);
        stroke(50);
        line(this.x, this.y, p.x, p.y);
      }
    };
  }

  drawParticle(){
    fill(250);
    noStroke();
    ellipse(this.x, this.y, 2, 2);
  }
}
