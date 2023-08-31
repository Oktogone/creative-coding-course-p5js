let rows, cols, cellH, cellW;
let noiseScale;

function setup() {
  createCanvas(600, 600);
  rows = 20;
  cols = 20;
  cellW = width / cols;
  cellH = height / rows;
  noiseScale = 0.15;
}

function draw() {
  background(250);
  noStroke();
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      //let n = noise((i + radians(frameCount)) * noiseScale, j * noiseScale);
      //let n = noise((i + radians(frameCount)) * noiseScale, (j + radians(frameCount)) * noiseScale);
      let n = noise(i * noiseScale, j * noiseScale, radians(frameCount) * noiseScale);
      //let brightness = n * 255;
      let brightness = constrain(pow(20 * n, 2), 0, 255);
      let x = i * cellW;
      let y = j * cellH;
      fill(brightness);
      rect(x, y, cellW, cellH);
    }
  }
}
