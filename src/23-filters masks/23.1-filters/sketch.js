let img;

function preload(){
  img = loadImage("../../assets/Northeaster by Winslow Homer.jpg");
}

function setup() {
  img.resize(600, 0);
  //img.filter(BLUR, 5);
  //img.filter(THRESHOLD, 0.7);
  //img.filter(GRAY);
  img.filter(INVERT);
  //img.filter(POSTERIZE, 8);
  createCanvas(img.width, img.height);
}

function draw() {
  image(img, 0, 0);
}
