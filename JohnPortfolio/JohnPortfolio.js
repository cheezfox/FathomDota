function setup() {


}

function draw() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  line(windowWidth/3, 0, windowWidth/3, windowHeight);
  line(windowWidth/3*2, 0, windowWidth/3*2, windowHeight);
  line(0, windowHeight/3, windowWidth, windowHeight/3);
  line(0, windowHeight/3*2, windowWidth, windowHeight/3*2);
  line(windowWidth/3, 0, windowWidth, windowHeight/3*2);
  line(windowWidth/3*2, 0, 0, windowHeight/3*2);
  line(0, windowHeight/3, windowWidth/3*2, windowHeight);
  line(windowWidth/3, windowHeight, windowWidth, windowHeight/3);
}