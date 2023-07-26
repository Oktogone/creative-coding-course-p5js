let earthquakes;

function setup() {
  createCanvas(600, 600);
  let urlAPI = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=10";
  httpGet(urlAPI, "json", false, callback);
}

function draw() {
  background(250);
  if(!earthquakes) return;
  for(let i = 0; i < earthquakes.features.length; i++){
    let earthquake = earthquakes.features[i];
    let magnitude = float(earthquake.properties.mag);
    let place = earthquake.properties.place;
    let x = random(50, width - 50);
    let y = random(50, height - 50);
    fill(255, 100, 100);
    noStroke();
    ellipse(x, y, 20 * magnitude, 20 * magnitude);
    fill(20);
    text(place, x, y);
  }
  noLoop();
}

function callback(data){
  earthquakes = data;
}
