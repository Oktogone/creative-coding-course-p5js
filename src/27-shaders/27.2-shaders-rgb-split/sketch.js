let camShader, cam;

function preload(){
  camShader = loadShader("../../assets/shaders/rgb-split/effect.vert", '../../assets/shaders/rgb-split/effect.frag');
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
  camShader.setUniform('resolution', [width, height]);
  rect(0, 0, width, height);
}
