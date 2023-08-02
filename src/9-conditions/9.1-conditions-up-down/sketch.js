function setup() {
  createCanvas(600, 600);
}

function draw() {
  noStroke();
  //change fill and background colour based on the position of the mouse
  if(mouseY > height * 0.5){
    fill(255, 100, 0);
    background(0, 200, 80);
  }
  else{
    fill(0, 200, 80);
    background(255, 100, 0);
  }
  ellipse(width * 0.5, height * 0.5, 200, 200);

  //draw a line to split the screen
  stroke(20);
  line(0, height * 0.5, width, height * 0.5);
}
