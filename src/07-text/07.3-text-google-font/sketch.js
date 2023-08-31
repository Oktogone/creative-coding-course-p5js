let sampleText;

function setup() {
  createCanvas(600, 600);
  textFont("Coiny");
  textSize(20);
  textAlign(CENTER, CENTER);
  sampleText = "Lorem ipsum dolor sit amet.";
}

function draw() {
  background(250);
  text(sampleText, width * 0.5, height * 0.5);
}
