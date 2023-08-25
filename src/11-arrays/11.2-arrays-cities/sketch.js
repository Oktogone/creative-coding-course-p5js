let cities, indice;

function setup() {
  createCanvas(500, 500);
  cities = [
    "Lisbon",
    "Paris",
    "Mexico City",
    "London",
    "Berlin"
  ];

  indice = 1;
  frameRate(1);
  textFont("Georgia");
  textSize(50);
  fill(250);
  noStroke()
}

function draw() {
  background(20);
  indice += 1;
  if(indice > cities.length -1){
    indice = 0;
  }
  text(cities[indice], 50, height * 0.5);
}
