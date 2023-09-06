//Sketch inspired by the creation of Matt DesLauriers
//https://www.mattdesl.com/

let colours;

function setup() {
  createCanvas(600, 600);

  //initialize colour palette
  colours = [
    color(214, 81, 49),
    color(157, 83, 122),
    color(237, 150, 58),
    color(68, 87, 217),
    color(237, 205, 69),
    color(105, 167, 57),
    color(255),
    color(0),
    color(152),
    color(106, 159, 58)
  ];
}

function draw() {
  background(232, 227, 214);
  noStroke();
  //randomSeed(1);
  //create a random number of rectangles
  let nbreRect = random(20, 40);
  for(let i = 0; i < nbreRect; i++){
    //pick and fill with a random colour
    let colorSelector = int(random(0, colours.length));
    let c = colours[colorSelector];
    fill(c);

    //generate random size and position
    let x = random(30, width - 30);
    let y = random(30, height - 30);
    let w = random(20, 150);
    let h = random(20, 150);

    //limit the size of the rectangle
    if(x + w > width - 30) {
      w = width - 30 - x;
    }
    if(y + h > height - 30) {
      h = height - 30 - y;
    }

    //make sure rect is no smaller than 20 pixels
    if(w < 20) {
      x = width - 50;
      w = 20;
    }
    if(h < 20) {
      y = height - 50;
      h = 20;
    }

    // draw the rectangle
    rect(x, y, w, h);
  }

  noLoop();
}
