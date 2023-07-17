function setup() {
  createCanvas(600, 600);
  frameRate(10);
}

function draw() {
  background(20);
  for(let i = 0; i < 10; i++){
    fill(random(255));
    ellipse(random(0, width), random(0, height), 100, 100);
  }
}
