let camShader, cam;

function preload(){
  camShader = loadShader("../../assets/shaders/pixelate/effect.vert", '../../assets/shaders/pixelate/effect.frag');
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
  rect(0, 0, width, height);
}
