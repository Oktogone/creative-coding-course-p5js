let mappa, mapOptions, myMap;
let canvas;
let earthquakes;

function setup() {
  canvas = createCanvas(600, 600);

  // Setup map
  mappa = new Mappa('Leaflet');
  mapOptions = {
    lat: 0,
    lng: 0,
    zoom: 2,
    style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
  }
  myMap = mappa.tileMap(mapOptions);
  myMap.overlay(canvas);

  // Load the data
  let APIurl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson";
  httpGet(APIurl+"&limit=100&orderby=magnitude", "json", false, callback);

  // Only redraw the meteorites when the map change and not every frame.
  myMap.onChange(drawEarthquakes);
}

function draw() {}

function drawEarthquakes() {
  if(!earthquakes) return;
  clear();

  for(let i = 0; i < earthquakes.features.length; i++){
    // get info about the earthquake
    let earthquake = earthquakes.features[i];
    let magnitude = float(earthquake.properties.mag);
    let place = earthquake.properties.place;
    let longitude = float(earthquake.geometry.coordinates[0]);
    let latitude = float(earthquake.geometry.coordinates[1]);

    // Only draw them if the position is inside the current map bounds
    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      // Transform lat/lng to pixel position
      let pos = myMap.latLngToPixel(latitude, longitude);
      let diameter = map(magnitude, 2, 10, 10, 30) * myMap.zoom();
      noStroke();
      fill(255, 100, 100, 50);
      ellipse(pos.x, pos.y, diameter, diameter);
      fill(255, 100, 100);
      ellipse(pos.x, pos.y, 10, 10);
      if(myMap.zoom() > 4){
        text(place, pos.x + diameter * 0.4, pos.y - diameter * 0.4);
        text("magnitude: " + magnitude, pos.x + diameter * 0.4, pos.y - diameter * 0.4 + 20);
      }

    }
  }
}

function callback(data){
  console.log(data);
  earthquakes = data;
  drawEarthquakes();
}
