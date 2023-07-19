let img;

function preload(){
  img = loadImage("../../assets/Northeaster by Winslow Homer.jpg");
}

function setup() {
  img.resize(600, 0);
  createCanvas(img.width, img.height);
}

function draw() {
  image(img, 0, 0);
}
