function setup() {
  createCanvas(600, 600);
  frameRate(10);
}

function draw() {
  background(20);
  fill(250);
  for(let i = 0; i < 6; i++){
    ellipse(50 + 100 * i, height * 0.5, 100, 100);
  }
}
