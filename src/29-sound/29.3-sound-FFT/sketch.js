let audio, fft, nbreFreqs;

function preload() {
  audio = loadSound('../../assets/sounds/Lonely in the Bar by Diego Nava.m4a');
}

function setup() {
  createCanvas(600, 600);

  fft = new p5.FFT();
  fft.setInput(audio);
  nbrFreqs = 15;
}

function draw(){
  background(250);
  fill(20);
  stroke(250);

  let spectrum = fft.analyze();
  for (let i = 0; i < nbrFreqs; i ++){
    let w = width / nbrFreqs;
    let h = - spectrum[i];
    let x = i * w;
    let y = height;
    rect(x, y, w, h);
  }
}

function keyTyped() {
  if (audio.isPlaying()) audio.pause();
  else audio.play();
}
