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
  buffer.clear();
  buffer.ellipse(width * 0.5, height * 0.5, 300, 300);

  // load all the pixels of the image to mask it with buffer
  let imgPixels = img.get();
  imgPixels.mask(buffer);

  image(img, 0, 0);
  //blendMode(ADD);
  //blendMode(EXCLUSION);
  //blendMode(MULTIPLY);
  //blendMode(SCREEN);
  //blendMode(OVERLAY);
  blendMode(BURN);
  image(imgPixels, 0, 0);
  blendMode(BLEND);
}
