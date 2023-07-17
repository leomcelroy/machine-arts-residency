// @version: v0.1.0
const {
  Turtle, Nos
} = art;

var inc = 0.05;
var yoffset = 0;
var yoffsetInc = 0.01;
var start = 0;
var yoffsetMax = 10;

let height = 1.0;
let width = 100;

const final = [];
let currentTurtle = null;
let fresh = true;

function beginShape() {
  currentTurtle = new Turtle();
  currentTurtle.up();
  fresh = true;
}

function vertex(x, y) {
  if (fresh) {
    currentTurtle.up();
  }
  currentTurtle.goTo(x, y);
  if (fresh) {
    currentTurtle.down();
    fresh = false;
  }
  
}

function endShape() {
  currentTurtle.applyPts(pt => [pt.x, pt.y]);
  final.push(...currentTurtle.path)
  currentTurtle = null;
}

while (true) {
  var y0 = 3.5 * height / 5;
  var ystep = 6;
  

  // Draw lines
  var yPrevious = y0;
  xoff = start;
  
  beginShape();
  for (var x = 0; x < width; x++) {
    
    var ycurr = 0.5 * Nos.perlin2(0.5 * xoff, yoffset) * height - ystep * yoffset + y0;
    var foundOverlap = false;
    for (var yoffsetvar = yoffset; yoffsetvar < yoffsetMax; yoffsetvar += yoffsetInc) {
      var y = 
        0.5 
          * Nos.perlin2(0.5 * xoff, yoffsetvar) 
          * height 
        - ystep * yoffsetvar 
        + y0;
      if (y > ycurr) {
        foundOverlap = true;
        endShape();
        beginShape();
        break
      }
    }
    
    xoff += inc;
      
    vertex(x, height - ycurr);
    yPrevious = ycurr;
  }
  endShape();
  yoffset += yoffsetInc;
    
  if (yoffset >= yoffsetMax) {
    break;
  }
}

geo.scale(final, 0.02);
const cc = geo.getPoint(final, "cc");
geo.translate(final, [0, 0], cc);

renderShape({
  shape: final
})
  
 