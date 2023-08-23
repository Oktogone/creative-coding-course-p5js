let font;
let sampleText;

function preload(){
  font = loadFont("../../assets/font/IBMPlexMono-Regular.ttf");
}

function setup() {
  createCanvas(600, 600);
  textFont(font);
  textSize(20);
  textAlign(CENTER, CENTER);
  sampleText = "Lorem ipsum dolor sit amet.";
}

function draw() {
  background(250);
  text(sampleText, width * 0.5, height * 0.5);
}
