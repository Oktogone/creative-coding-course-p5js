let video;

function setup() {
  createCanvas(600, 600);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
}

function draw() {
  background(20);
  image(video, 0, 0);
}
