let camShader, cam;

function preload(){
  camShader = loadShader("../../assets/shaders/pixelate-interact/effect.vert", '../../assets/shaders/pixelate-interact/effect.frag');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  noStroke();
  cam = createCapture(VIDEO);
  cam.hide();
}

function draw() {
  shader(camShader);
  let tiles = map(mouseY, 0, height, 5.0, 50.0);
  camShader.setUniform('tex0', cam);
  camShader.setUniform('tiles', tiles);
  rect(0, 0, width, height);
}
