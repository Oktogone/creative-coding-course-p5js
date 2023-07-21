let audio, fft;
let range;

function preload() {
  audio = loadSound('../../assets/sounds/Lonely in the Bar by Diego Nava.m4a');
}

function setup() {
  createCanvas(600, 600);
  fft = new p5.FFT();
  fft.setInput(audio);
  range = [10, 30];
}

function draw(){
  if (audio.isPlaying()){
    background(250);
    fill(20);
    stroke(250);
  }
  else {
    background(20);
    fill(250);
    stroke(20);
  }
  let spectrum = fft.analyze();
  for (let i = 0; i < range[1]; i ++){
    let w = width / (range[1] - range[0]);
    let x = i * w;
    let h = map(spectrum[i], 0, 255, 0, -height * 0.5);
    rect(x, height, w, h);
  }
}

function toggleAudio() {
  if (audio.isPlaying()) audio.pause();
  else audio.play();
}

function restartAudio() {
  audio.stop();
  audio.play();
}

function keyTyped() {
  if(key === "p") toggleAudio();
  else if(key === "r") restartAudio();
}
