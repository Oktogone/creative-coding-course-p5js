function setup() {
  createCanvas(600, 600);
  frameRate(10);
}

function draw() {
  background(20);
  for(let i = 0; i < 10; i++){
    let shade = random(255);
    let x = random(0, width);
    let y = random(0, height);
    fill(shade);
    ellipse(x, y, 100, 100);
  }
}
