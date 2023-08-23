function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background(20);
  //change fill colour based on the position of the mouse
  if(mouseY > height * 0.5){
    fill(255, 100, 0);
  }
  else{
    fill(0, 200, 80);
  }
  ellipse(width * 0.5, height * 0.5, 200, 200);
}
