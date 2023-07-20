let img;

function preload(){
  img = loadImage("../../assets/images/Northeaster by Winslow Homer.jpg");
}

function setup() {
  img.resize(600, 0);
  createCanvas(img.width, img.height);
}

function draw() {
  image(img, 0, 0);

  let sourceX = mouseX;
  let sourceY = mouseY;
  let sourceW = 100;
  let sourceH = 100;
  let destX = width * 0.5 - 100;
  let destY = height * 0.5 - 100;
  destX = sourceX;
  destY = sourceY;
  let destW = 200;
  let destH = 200;

  noStroke();
  fill(250);
  rect(destX, destY, destW, destH);

  image(img, destX, destY, destW, destH, sourceX, sourceY, sourceW, sourceH);
}
