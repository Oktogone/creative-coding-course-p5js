let sampleText;

function setup() {
  createCanvas(600, 600);

  textFont("Georgia");
  textSize(20);
  //textAlign(CENTER, CENTER);
  sampleText = "Lorem ipsum dolor sit amet.";
}

function draw() {
  background(250);
  //text(sampleText, width * 0.5, height * 0.5);
  text(sampleText, 50, height * 0.5);
}
