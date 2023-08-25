function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  //change fill colour based on the position of the mouse
  if(mouseY > height * 0.5){
    background(0, 200, 80);
    fill(255, 100, 0);
  }
  else{
    background(255, 100, 0);
    fill(0, 200, 80);
  }
  ellipse(width * 0.5, height * 0.5, 200, 200);
}
