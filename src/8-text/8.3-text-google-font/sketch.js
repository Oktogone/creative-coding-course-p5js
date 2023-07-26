let font;
let sampleText;

function setup() {
  createCanvas(600, 600);
  textFont("Coiny");
  textSize(20);
  sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
}

function draw() {
  background(250);
  let x = 50;
  let y = height * 0.5;
  ellipse(50, height * 0.5, 10, 10);
  text(sampleText, x, y);
}
