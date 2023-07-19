let img;
let rows, cols, cellH, cellW;
let chars = " ._▂▃▄▅▆▇░▒▓█";

function preload(){
  img = loadImage("../../assets/Northeaster by Winslow Homer.jpg");
  font = loadFont("../../assets/IBMPlexMono-Regular.otf");
}

function setup() {
  img.resize(600, 0);
  createCanvas(img.width, img.height);
  rows = 40;
  cols = 60;
  cellW = width / cols;
  cellH = height / rows;
  textFont(font);
  textSize(cellH);
}

function draw() {
  background(250);
  noStroke();

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW + cellW * 0.5;
      let y = j * cellH + cellH * 0.5;
      let c = img.get(x, y);
      let b = brightness(c);
      let charSelector = int(map(b, 0, 100, chars.length, 0));
      push();
      translate(x, y);
      fill(20);
      text(chars.charAt(charSelector), 0, 0);
      pop();
    }
  }
}
