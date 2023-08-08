let img, buffer;

function preload(){
  img = loadImage("../../assets/images/Northeaster by Winslow Homer.jpg");
}

function setup() {
  img.resize(600, 0);
  createCanvas(img.width, img.height);
  buffer = createGraphics(width, height);
}

function draw() {
  buffer.ellipse(width * 0.5, height * 0.5, 300, 300);

  // load all the pixels of the image to mask it with buffer
  let imgPixels = img.get();
  imgPixels.mask(buffer);
  imgPixels.filter(INVERT);

  image(img, 0, 0);
  image(imgPixels, 0, 0);
}
