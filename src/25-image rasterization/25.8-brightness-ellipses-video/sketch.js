let video;
let steps;

function setup() {
  createCanvas(600, 600);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  steps = 10;
}

function draw() {
  background(250);
  noStroke();
  steps = int(map(mouseY, 0, height, 10, 50));
  video.loadPixels();
  for (let x = 0; x < width; x+=steps) {
    for (let y = 0; y < height; y+=steps) {
      let index = (x + y * video.width) * 4;
      let c = [
        video.pixels[index],
        video.pixels[index + 1],
        video.pixels[index + 2],
        video.pixels[index + 3]
      ];
      let b = (c[0] + c[1] + c[2]) / 3;
      let diameter = map(b, 0, 255, 1, 0) * steps;
      fill(20);
      ellipse(x, y, diameter, diameter);
    }
  }
}
