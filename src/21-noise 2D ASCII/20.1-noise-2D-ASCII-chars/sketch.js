let rows, cols, cellH, cellW;
let noiseScale;
let chars;
let font;

function preload(){
  font = loadFont("../../assets/font/IBMPlexMono-Regular.ttf");
}

function setup() {
  createCanvas(600, 600);
  rows = 50;
  cols = 50;
  cellW = width / cols;
  cellH = height / rows;
  noiseScale = 0.15;
  textFont(font);
  textSize(cellH);
  chars = " ._▂▃▄▅▆▇░▒▓█";
}

function draw() {
  background(250);
  noStroke();
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW + cellW * 0.5;
      let y = j * cellH + cellH * 0.5;
      let n = noise((i + radians(frameCount)) * noiseScale, (j + radians(frameCount)) * noiseScale);
      let charSelector = int(map(n, 0, 1, chars.length, 0));
      fill(20);
      text(chars.charAt(charSelector), x, y);
    }
  }
}
