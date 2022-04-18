function setup() {
  createCanvas(900, 300);
  background(0);
}
// add black lines under white lines
function draw() {
  colorMode(RGB, 255);

  noFill();
  stroke(255);
  strokeWeight(5);
  quad(25, 63, 875, 63, 875, 238, 25, 238);

  stroke(0);
  strokeWeight(11);
  quad(450, 25, 575, 150, 450, 275, 325, 150);

  stroke(255);
  strokeWeight(5);
  quad(450, 25, 575, 150, 450, 275, 325, 150);



  stroke(0);
  fill(230);
  ellipse(450, 150, 100, 100); //full moon base

  colorMode(HSB, 360, 100, 100, 1);
  fill(0, 94, 53, 0.85);
  ellipse(450, 150, 100, 100); //full blood moon overlay



  colorMode(RGB, 255);
  fill(230);
  ellipse(575, 150, 50, 100); //waning gibbous base
  ellipse(325, 150, 50, 100); //waxing gibbous base

  colorMode(HSB, 360, 100, 100, 1);
  fill(0, 94, 53, 0.5);
  ellipse(575, 150, 50, 100); //waning gibbous blood moon overlay
  ellipse(325, 150, 50, 100); //waxing gibbous blood moon overlay

  colorMode(RGB, 255);
  fill(230);
  arc(575, 150, 100, 100, HALF_PI, PI + HALF_PI); //waning gibbous base
  arc(325, 150, 100, 100, HALF_PI + PI, HALF_PI); //waxing gibbous base

  colorMode(HSB, 360, 100, 100, 1);
  fill(0, 94, 53, 0.5);
  arc(575, 150, 100, 100, HALF_PI, PI + HALF_PI); //waning gibbous blood moon overlay
  arc(325, 150, 100, 100, HALF_PI + PI, HALF_PI); //waxing gibbous blood moon overlay



  colorMode(RGB, 255);
  fill(230);
  arc(700, 150, 100, 100, HALF_PI, PI + HALF_PI); //last quarter base
  arc(200, 150, 100, 100, HALF_PI + PI, HALF_PI); //first quarter base

  colorMode(HSB, 360, 100, 100, 1);
  fill(0, 94, 53, 0.25);
  arc(700, 150, 100, 100, HALF_PI, PI + HALF_PI); //last quarter blood moon overlay
  arc(200, 150, 100, 100, HALF_PI + PI, HALF_PI); //first quarter blood moon overlay



  colorMode(RGB, 255);
  fill(230);
  arc(825, 150, 100, 100, HALF_PI, PI + HALF_PI); //waning crescent base
  arc(75, 150, 100, 100, HALF_PI + PI, HALF_PI); //waxing crescent base

  colorMode(HSB, 360, 100, 100, 1);
  fill(0, 94, 53, 0.1);
  arc(825, 150, 100, 100, HALF_PI, PI + HALF_PI); //waning crescent blood moon overlay
  arc(75, 150, 100, 100, HALF_PI + PI, HALF_PI); //waxing crescent blood moon overlay

  colorMode(RGB, 255);
  fill(0);
  ellipse(825, 150, 50, 97); //waning crescent carve
  ellipse(75, 150, 50, 97); //waxing crescent carve


  
  noFill();
  strokeWeight(10);
  stroke('#880808');
  beginShape();
  vertex(0, 0);
  vertex(899, 0);
  vertex(899, 298);
  vertex(0, 298);
  endShape(CLOSE);

}
