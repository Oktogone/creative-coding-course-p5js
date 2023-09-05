//Sketch inspired by the creation of Luce Terrasson
//https://luceterrasson.com/

let nbreLines, gapLine, lineHeight, lineWidth;
let margin, drawWidth, drawHeight;

function setup() {
  createCanvas(600, 600);

  nbreLines = 100;
  margin = 50;
  drawWidth = width - 2 * margin;
  drawHeight = height - 2 * margin;
  gapLine = drawWidth / nbreLines;
  lineWidth = 3;
  lineHeight = drawHeight / 3;

  stroke(0);
  noLoop();
}

function draw() {
  background(0);

  translate(margin, margin);
  drawLines(PI);
  translate(0, lineHeight);
  drawLines(0);
  translate(0, lineHeight);
  drawLines(PI);
}

function drawLines(angleShift){
  for (let i = 0 ; i < nbreLines; i++){
    let x = i * gapLine;
    let angle = map(x, 0, width, 0, 2 * PI);
    let brightness = map(cos(angle + angleShift), -1, 1, 100, 255);
    brightness *= random(0.8, 1.2);
    fill(brightness);
    rect(x, 0, lineWidth, lineHeight);
  }
}
