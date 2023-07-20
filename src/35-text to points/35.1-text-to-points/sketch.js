let font, fontPoints, fontSize;

function preload(){
  font = loadFont("../../assets/font/IBMPlexSerif-Regular.ttf");
}

function setup() {
  createCanvas(600, 600);
  textFont(font);
  fontSize = 400;
  textSize(fontSize);
  fontPoints = font.textToPoints("W", width * 0.2, height * 0.75, fontSize);
}

function draw() {
  background(20);
  fill(250);
  for (let i = 0; i < fontPoints.length; i++) {
    let p = fontPoints[i];
    ellipse(p.x, p.y, 5, 5);
  }
  fill(50);
  text("W", width * 0.2, height * 0.75);
}
