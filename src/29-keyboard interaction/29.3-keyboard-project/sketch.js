let colours, nextColour;

function setup() {
  createCanvas(600, 600);
  colours = [
    color(224, 52, 148),
    color(65, 129, 236)
  ];
  background(189, 213, 240);
  nextColour = 0;

  //initialise text
  fontSize = 200;
  textFont('Georgia');
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  blendMode(MULTIPLY);
}

function draw() {

}

function drawCharacter(k){
  //pick next colour
  let c = colours[nextColour];
  nextColour ++;
  nextColour = nextColour % 2;

  push();
  translate(random(0, width), random(0, height))
  rotate(radians(random(0,360)));
  fill(c);
  text(k.toUpperCase(), 0, 0);
  pop();
}

function keyTyped() {
  if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90)) {
    drawCharacter(key);
  }
}

function keyPressed(){
  if(keyCode === DELETE || keyCode === BACKSPACE){
    clear();
    background(189, 213, 240);
  }
}
