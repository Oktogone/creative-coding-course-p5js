function setup() {
  createCanvas(600, 600);

  //initialise text
  textFont("Georgia");
  textAlign(CENTER, CENTER);
  textSize(400);
  background(250);
}

function draw() {

}

function keyPressed() {
  if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90)) {
    background(250);
    fill(20);
    text(key, width * 0.5, height * 0.5);
  }
}
