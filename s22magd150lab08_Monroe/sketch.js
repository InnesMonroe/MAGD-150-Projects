let entanglement_font;
let pasajero_font;
let celestial_img;
let scrolling_text;
let dante_img;
let x;
let y;
var pdf;

function preload() {
  entanglement_font = loadFont('entanglement.ttf');
  pasajero_font = loadFont('pasajero.ttf');
  celestial_img = loadImage('celestial.jpg');
  dante_img = loadImage('dante.png');
  scrolling_text = loadStrings('scroll.txt');
}

function setup() {
  createCanvas(540, 1034);
  x = width;
  y = height - 20;

  dante_img.filter(INVERT);

  pdf = createPDF();
  pdf.beginRecord();
}

function draw() {
  tint(255, 255);
  image(celestial_img, 0, 0); // display the background image for the movie poster

  tint(255, 180);
  image(dante_img, 430, 80);

  noFill();
  textFont(entanglement_font);
  textAlign(CENTER);
  stroke(255);
  textSize(75);
  text('CELESTIAL', width / 2, 60); // display the movie title at the top of the movie poster

  fill(255);
  textFont(pasajero_font);
  textAlign(LEFT);
  textSize(20);
  text(scrolling_text, x, y); // display the release date of the movie at the bottom of the movie poster

  x -= 2; // make the the release date text move left


  let w = textWidth("in theaters 4/2/2022");
  if (x < -w) {
    x = width; // reset the position of the release date text after it moves off screen
  }
}

function mouseClicked() {
  pdf.save();
}
