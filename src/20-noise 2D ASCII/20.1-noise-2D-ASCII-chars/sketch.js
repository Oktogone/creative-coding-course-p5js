let rows, cols, cellH, cellW;
let noiseScale;
let chars = " ._▂▃▄▅▆▇░▒▓█";

function setup() {
  createCanvas(600, 600);
  rows = 50;
  cols = 50;
  cellW = width / rows;
  cellH = height / cols;
  noiseScale = 0.15;
  font = loadFont("../../assets/IBMPlexMono-Regular.otf");
  textFont(font);
  textSize(cellH);
}

function draw() {
  background(250);
  noStroke();
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let localX = i * cellW + cellW * 0.5;
      let localY = j * cellH + cellH * 0.5;
      let n = noise((i + radians(frameCount)) * noiseScale, (j + radians(frameCount)) * noiseScale);
      let charSelector = int(map(n, 0, 1, chars.length, 0));
      push();
      translate(localX, localY);
      fill(20);
      text(chars.charAt(charSelector), 0, 0);
      pop();
    }
  }
}
