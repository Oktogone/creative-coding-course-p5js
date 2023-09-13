let audio;

function preload() {
  audio = loadSound('../../assets/sounds/Lonely in the Bar by Diego Nava.m4a');
}

function setup() {
  createCanvas(600, 600);
}

function draw(){
  background(250);
  fill(20);
}

function keyPressed() {
  if (audio.isPlaying()) audio.pause();
  else audio.play();
}
