function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  //change fill and background colour
  //based on the distance between the mouse and the center of the ellipse
  let d = dist(width * 0.5, height * 0.5, mouseX, mouseY);
  console.log(d);
  if(d > 100){
    fill(255, 100, 0);
    background(0, 200, 80);
  }
  else{
    fill(0, 200, 80);
    background(255, 100, 0);
  }
  ellipse(width * 0.5, height * 0.5, 200, 200);
}
