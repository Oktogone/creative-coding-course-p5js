let img;
let rows, cols, cellH, cellW;
let colours;

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
  colours = [
    color(20),
    color(0, 0, 255),
    color(0, 250, 100),
    color(250)
  ];
}

function draw() {
  noStroke();
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW;
      let y = j * cellH;
      let c = img.get(x, y);
      let b = brightness(c);
      let colorSelector = int(map(b, 0, 100, colours.length, 0));
      fill(colours[colorSelector]);
      rect(x, y, cellW, cellH);
    }
  }
}
