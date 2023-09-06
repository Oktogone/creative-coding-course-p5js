function setup() {
  createCanvas(600, 600);
  background(250);

  //initialise text
  fontSize = 200;
  textFont('Georgia');
  textSize(fontSize);
  textAlign(CENTER, CENTER);
}

function draw() {

}

function keyPressed(){
  if(keyCode === BACKSPACE){
    clear();
    background(250);
  }
  if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90)) {
    background(250, 100);
    push();
    translate(random(0, width), random(0, height))
    rotate(radians(random(0,360)));
    fill(20);
    text(key, 0, 0);
    pop();
  }
}
