let video;
let rows, cols, cellH, cellW;

function setup() {
  createCanvas(600, 600);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  rows = 40;
  cols = 60;
  cellW = width / cols;
  cellH = height / rows;
}

function draw() {
  background(20);
  noStroke();
  video.loadPixels();
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW;
      let y = j * cellH;
      let index = (x + y * video.width) * 4;
      let c = color(
        video.pixels[index],
        video.pixels[index + 1],
        video.pixels[index + 2],
        video.pixels[index + 3]
      );
      let b = map(brightness(c), 0, 100, 0, 255);
      fill(b);
      rect(x, y, cellW, cellH);
    }
  }
}
