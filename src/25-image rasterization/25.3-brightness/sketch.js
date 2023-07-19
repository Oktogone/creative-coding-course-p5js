let img;
let rows, cols, cellH, cellW;

function preload(){
  img = loadImage("../../assets/Northeaster by Winslow Homer.jpg");
}

function setup() {
  img.resize(600, 0);
  createCanvas(img.width, img.height);
  rows = 40;
  cols = 60;
  cellW = width / cols;
  cellH = height / rows;
}

function draw() {
  noStroke();
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW;
      let y = j * cellH;
      push();
      translate(x, y);
      let c = img.get(x, y);
      let b = map(brightness(c), 0, 100, 0, 255)
      fill(b);
      rect(0, 0, cellW, cellH);
      pop();
    }
  }
}
