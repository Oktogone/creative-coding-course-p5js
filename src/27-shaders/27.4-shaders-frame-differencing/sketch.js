let camShader, cam;

let pastFrame;  // we need one extra createGraphics layer for the previous video frame

function preload(){
  camShader = loadShader("../../assets/shaders/frame-differencing/effect.vert", '../../assets/shaders/frame-differencing/effect.frag');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  noStroke();
  pastFrame = createGraphics(width, height);
  cam = createCapture(VIDEO);
  cam.hide();
}

function draw() {
  shader(camShader);
  camShader.setUniform('tex0', cam);
  camShader.setUniform('tex1', pastFrame);
  camShader.setUniform('mouseX', mouseX/width);
  rect(0,0,width, height);
  pastFrame.image(cam, 0, 0, width, height);
}
