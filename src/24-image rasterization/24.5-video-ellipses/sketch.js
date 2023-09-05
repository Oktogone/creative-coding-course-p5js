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
  fill(250);

  steps = int(map(mouseY, 0, height, 10, 50));
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
      let b = brightness(c);
      let diam = map(b, 0, 100, cellH, 0);
      ellipse(x + cellW * 0.5, y + cellH * 0.5, diam, diam);
    }
  }
}
