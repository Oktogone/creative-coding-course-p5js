let shader1, shader2;
let textBuffer, buffer1, buffer2;
let font;

function preload(){
  shader1 = loadShader('../../assets/shaders/mosaic/effect.vert', '../../assets/shaders/mosaic/effect.frag');
  shader2 = loadShader('../../assets/shaders/rgb-split/effect.vert', '../../assets/shaders/rgb-split/effect.frag');
}

function setup() {
  createCanvas(600, 600);
  setupBuffer();
}

function setupBuffer() {
  textBuffer = createGraphics(width, height);
  textBuffer.textFont('Georgia');
  textBuffer.textAlign(CENTER, CENTER);
  textBuffer.background(0);
  textBuffer.textSize(300);
  textBuffer.fill(250);
  textBuffer.text("W", width * 0.5, height * 0.5);
  buffer1 = createGraphics(width, height, WEBGL);
  buffer2 = createGraphics(width, height, WEBGL);
}

function draw() {
  background(0);
  buffer1.shader(shader1);

  shader1.setUniform('tex0', textBuffer);
  shader1.setUniform('resolution', [width, height]);

  // mouse
  let freq = map(mouseX, 0, width, -0.5, 0.5);
  let amp = map(mouseY, 0, height, 1.0, 15.0);

  shader1.setUniform('amt', freq);
  shader1.setUniform('squares', amp);

  // rect gives us some geometry on the screen
  buffer1.rect(0, 0, width, height);

  buffer2.clear();
  buffer2.shader(shader2);

  // send the camera and the resolution to the shader
  shader2.setUniform('tex0', buffer1);
  shader2.setUniform('resolution', [width, height]);

  buffer2.rect(0, 0, width, height);
  image(buffer2, 0, 0);
}
