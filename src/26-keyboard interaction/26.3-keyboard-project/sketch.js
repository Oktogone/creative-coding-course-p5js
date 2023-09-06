let colours;

function setup() {
  createCanvas(600, 600);
  colours = [
    color(224, 52, 148),
    color(65, 129, 236)
  ];
  background(189, 213, 240);

  //initialise text
  fontSize = 200;
  textFont('Georgia');
  textSize(fontSize);
  textAlign(CENTER, CENTER);

  blendMode(MULTIPLY);
}

function draw() {

}

function keyPressed(){
  if(keyCode === BACKSPACE){
    clear();
    background(189, 213, 240);
  }
  if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90)) {
    //pick next colour
    let colorSelector = int(random(0, colours.length));
    let c = colours[colorSelector];

    push();
    translate(random(0, width), random(0, height))
    rotate(radians(random(0,360)));
    fill(c);
    text(key, 0, 0);
    pop();
  }
}
