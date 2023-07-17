function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250);
  translate(0, height * 0.5);
  noStroke();
  fill(20);
  for(let i = 0; i < width; i += 2){
    let angle = map(i, 0, width, 0, 4 * PI);
    ellipse(i, 100 * sin(angle), 2, 2);
  }
}
