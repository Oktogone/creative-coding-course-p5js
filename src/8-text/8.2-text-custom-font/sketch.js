let fontRegular, fontItalic;
let sampleText;

function preload(){
  fontRegular = loadFont("../../assets/font/IBMPlexMono-Regular.ttf");
  fontItalic = loadFont("../../assets/font/IBMPlexMono-Italic.ttf");
}

function setup() {
  createCanvas(600, 600);
  textFont(fontRegular);
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
