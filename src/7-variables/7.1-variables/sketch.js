let score;

function setup() {
  createCanvas(600, 600);

  // score
  score = 0;
  score = score + 1;
  score += 10;
  score *= 2.5;
  score = int(score);
  console.log(score);

  // name
  let name = "Aurélien";
  console.log(name);
}

function draw() {
  background(250);
}
