let audio, ampitude;

function preload() {
  audio = loadSound('../../assets/sounds/Lonely in the Bar by Diego Nava.m4a');
}

function setup() {
  createCanvas(600, 600);
  amplitude = new p5.Amplitude();
  amplitude.setInput(audio);
}

function draw(){
  if (audio.isPlaying()){
    background(250);
    fill(20);
  }
  else {
    background(20);
    fill(250);
  }
  let level = amplitude.getLevel();
  let diameter = map(level, 0, 1, 50, 300);
  ellipse(width * 0.5, height * 0.5, diameter, diameter);
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
