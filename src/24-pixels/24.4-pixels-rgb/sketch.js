let img;

function preload(){
  img = loadImage("../../assets/Northeaster by Winslow Homer.jpg");
}

function setup() {
  img.resize(600, 0);
  createCanvas(img.width, img.height);
  rectMode(CENTER);
}

function draw() {
  image(img, 0, 0);
  let c = img.get(mouseX, mouseY);
  let r = red(c);
  let g = green(c);
  let b = blue(c);
  fill(r, g, b);
  noStroke();
  rect(width * 0.5, height * 0.5, 100, 100);
}
