let video;
let rows, cols, cellH, cellW;
let chars;

function setup() {
  createCanvas(600, 600);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
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
      let charSelector = int(map(b, 0, 100, chars.length, 0));
      push();
      translate(x + cellW * 0.5, y + cellH * 0.5);
      fill(250);
      text(chars.charAt(charSelector), 0, 0);
      pop();
    }
  }
}
