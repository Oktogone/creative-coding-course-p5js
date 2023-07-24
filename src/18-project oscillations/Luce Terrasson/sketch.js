let marginX, marginY;
let nbreLines, gapX, gapY;
let drawWidth, drawHeight, lineHeight;

function setup() {
  createCanvas(600, 600);
  nbreLines = 120;
  marginX = 50;
  marginY = 50;
  drawWidth = width - 2 * marginX;
  gapX = drawWidth / nbreLines;
  drawHeight = height - 2 * marginY;
  lineHeight = drawHeight * 0.33;
  gapY = (drawHeight - 3 * lineHeight) * 0.5;
}

function draw() {
  background(20);
  strokeWeight(2);
  noFill();
  randomSeed(1);

  translate(marginX, marginY);
  drawLines(PI);
  translate(0, gapY + lineHeight);
  drawLines(0);
  translate(0, gapY + lineHeight);
  drawLines(PI);
}

function drawLines(angleShift){
  for (let i = 0 ; i < nbreLines; i++){
    let x = i * gapX;
    let angle = map(x, 0, width, 0, 360);
    let radAngle = radians(angle) + angleShift;
    let brightness = map(cos(radAngle), -1, 1, 100, 255);
    brightness *= random(0.8, 1.2);
    stroke(brightness);
    line(x, 0, x, lineHeight);
  }
}
