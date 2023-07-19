let img;
let rows, cols, cellH, cellW;

function preload(){
  img = loadImage("../../assets/Northeaster by Winslow Homer.jpg");
}

function setup() {
  img.resize(600, 0);
  createCanvas(600, 400);
  rows = 40;
  cols = 60;
  cellW = width / cols;
  cellH = height / rows;
}

function draw() {
  noStroke();
  img.loadPixels();
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW;
      let y = j * cellH;
      let index = (x + y * img.width) * 4;
      let c = [
        img.pixels[index],
        img.pixels[index + 1],
        img.pixels[index + 2],
        img.pixels[index + 3]
      ];
      push();
      translate(x, y);
      fill(c[0], c[1], c[2]);
      rect(0, 0, cellW, cellH);
      pop();
    }
  }
}
