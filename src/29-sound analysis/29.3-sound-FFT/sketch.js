let audio, fft, nbrFreqs, cellW;

function preload() {
  audio = loadSound('../../assets/sounds/Lonely in the Bar by Diego Nava.m4a');
}

function setup() {
  createCanvas(600, 600);

  fft = new p5.FFT();
  fft.setInput(audio);
  nbrFreqs = 15;
  cellW = width / nbrFreqs
}

function draw(){
  background(250);
  fill(20);
  stroke(250);

  let spectrum = fft.analyze();
  for (let i = 0; i < nbrFreqs; i ++){
    let x = i * cellW;
    let y = height;
    let cellH = - spectrum[i];
    rect(x, y, cellW, cellH);
  }
}

function keyPressed() {
  if (audio.isPlaying()) audio.pause();
  else audio.play();
}
