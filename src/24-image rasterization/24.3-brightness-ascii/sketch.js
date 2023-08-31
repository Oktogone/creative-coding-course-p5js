let img;
let rows, cols, cellH, cellW;
let chars;

function preload(){
  img = loadImage("../../assets/images/Northeaster by Winslow Homer.jpg");
}

function setup() {
  img.resize(600, 0);
  createCanvas(img.width, img.height);
  rows = 40;
  cols = 60;
  cellW = width / cols;
  cellH = height / rows;
  textSize(cellH);
  chars = " ._:-+cab@XWÑ";
}

function draw() {
  background(20);
  noStroke();

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW + cellW * 0.5;
      let y = j * cellH + cellH * 0.5;
      let c = img.get(x, y);
      let b = brightness(c);
      let charSelector = int(map(b, 0, 100, chars.length, 0));
      fill(250);
      text(chars.charAt(charSelector), x, y);
    }
  }
}
