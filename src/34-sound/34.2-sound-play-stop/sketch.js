let audio;

function preload() {
  audio = loadSound('../../assets/sounds/Lonely in the Bar by Diego Nava.m4a');
}

function setup() {
  createCanvas(600, 600);
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
  ellipse(width * 0.5, height * 0.5, 200, 200);
}

function toggleAudio() {
  if (audio.isPlaying()) audio.pause();
  else audio.play();
}

function restartAudio() {
  audio.stop();
  audio.play();
}

function keyPressed() {
  if(key === "p") toggleAudio();
  else if(key === "r") restartAudio();
}
