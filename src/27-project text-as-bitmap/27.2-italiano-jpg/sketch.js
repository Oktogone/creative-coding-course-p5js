//Sketch inspired by the creation of italiano.jpg
//https://www.instagram.com/italiano.jpg/

let rows, cols, cellH, cellW;
let noiseScale;
let textBuffer;

function setup() {
  createCanvas(600, 600);
  noStroke();

  rows = 30;
  cols = 30;
  cellW = width / cols;
  cellH = height / rows;

  noiseScale = 0.5;
  setupBuffer();
}

function draw() {
  background(20);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW;
      let y = j * cellH;
      let c = textBuffer.get(x, y);
      let b = brightness(c);
      if(b > 50){
        let n = noise(i * noiseScale, j * noiseScale, radians(frameCount) * noiseScale);
        let brightness = n * 255;
        fill(brightness);
        rect(x, y, cellW, cellH);
      }
    }
  }
}

function setupBuffer() {
  textBuffer = createGraphics(width, height);
  textBuffer.textFont('Georgia');
  textBuffer.textAlign(CENTER, CENTER);
  textBuffer.textSize(500);
  textBuffer.fill(250);
  textBuffer.text("W", width * 0.5, height * 0.5 + 30);
}
