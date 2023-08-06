let img;

function preload(){
  img = loadImage("../../assets/images/Northeaster by Winslow Homer.jpg");
}

function setup() {
  img.resize(600, 0);
  createCanvas(img.width, img.height);
  rectMode(CENTER);
}

function draw() {
  image(img, 0, 0);
  img.loadPixels();
  let x = int(mouseX);
  let y = int(mouseY);
  let index = (x + y * img.width) * 4;
  let c = color(
    img.pixels[index],
    img.pixels[index + 1],
    img.pixels[index + 2],
    img.pixels[index + 3]
  );
  let b = map(brightness(c), 0, 100, 0, 255);
  fill(b);
  noStroke();
  rect(width * 0.5, height * 0.5, 100, 100);
}
