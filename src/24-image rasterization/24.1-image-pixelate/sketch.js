let img;
let rows, cols, cellH, cellW;

function preload(){
  img = loadImage("../../assets/images/Northeaster by Winslow Homer.jpg");
}

function setup() {
  img.resize(600, 0);
  createCanvas(img.width, img.height);
  rows = 40;
  cols = 200;
  cellW = width / cols;
  cellH = height / rows;
}

function draw() {
  noStroke();
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW;
      let y = j * cellH;
      let c = img.get(x, y);
      fill(c);
      rect(x, y, cellW, cellH);
    }
  }
}
