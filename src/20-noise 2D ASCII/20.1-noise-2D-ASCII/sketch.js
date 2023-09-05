let rows, cols, cellH, cellW;
let noiseScale;
let chars;

function setup() {
  createCanvas(600, 600);
  rows = 50;
  cols = 50;
  cellW = width / cols;
  cellH = height / rows;
  noiseScale = 0.15;
  textSize(cellH);
  textAlign(LEFT, TOP)
  chars = " ._:-+cab@XWÑ";
}

function draw() {
  background(20);
  noStroke();
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW;
      let y = j * cellH;
      let n = noise((i + radians(frameCount)) * noiseScale, (j + radians(frameCount)) * noiseScale);
      let charSelector = int(map(n, 0, 1, chars.length, 0));
      fill(250);
      text(chars.charAt(charSelector), x, y);
    }
  }
}
