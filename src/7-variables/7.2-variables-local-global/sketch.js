let score;

function setup() {
  createCanvas(600, 600);

  // score
  score = score + 1;
  score += 10;
  score *= 2.5;
  score = int(score);

  // name
  let name = "Aurélien";
}

function draw() {
  background(250);
  console.log(score);
  console.log(name);
}
