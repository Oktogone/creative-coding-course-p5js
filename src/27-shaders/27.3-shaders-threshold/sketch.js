let camShader, cam;

function preload(){
  camShader = loadShader("../../assets/shaders/threshold/effect.vert", '../../assets/shaders/threshold/effect.frag');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  noStroke();
  cam = createCapture(VIDEO);
  cam.hide();
}

function draw() {
  shader(camShader);
  camShader.setUniform('tex0', cam);
  camShader.setUniform('mouseX', mouseX/width);
  rect(0, 0, width, height);
}
