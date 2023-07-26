let textShader;
let textBuffer;
let font;

function preload(){
  textShader = loadShader('../../assets/shaders/mosaic/effect.vert', '../../assets/shaders/mosaic/effect.frag');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  setupBuffer();
}

function setupBuffer(){
  textBuffer = createGraphics(width, height);
  textBuffer.textFont('Georgia');
  textBuffer.textAlign(CENTER, CENTER);
  textBuffer.background(0);
  textBuffer.textSize(300);
  textBuffer.fill(250);
  textBuffer.text("W", width * 0.5, height * 0.5);
}

function draw() {
  background(20);

  // shader() sets the active shader with our shader
  shader(textShader);

  // send the camera and the resolution to the shader
  textShader.setUniform('tex0', textBuffer);
  textShader.setUniform('resolution', [width, height]);

  // mouse
  let freq = map(mouseX, 0, width, -0.5, 0.5);
  let amp = map(mouseY, 0, height, 1.0, 15.0);

  // send the two values to the shader
  textShader.setUniform('amt', freq);
  textShader.setUniform('squares', amp);

  // rect gives us some geometry on the screen
  rect(0, 0, width, height);
}
