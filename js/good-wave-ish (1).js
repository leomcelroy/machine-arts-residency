// @version: v0.1.0
const {
  Turtle, Nos
} = art;

var inc = 0.11;
var yoffset = 29.1;
var yoffsetInc = 0.2;
var start = 0;
var yoffsetMax = 39;

let height = 19.8;
let width = 337;

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
  var ystep = 7;
  
  // Draw lines
  var yPrevious = 0;
  xoff = start;
  
  beginShape();
  for (var x = 0; x < width; x++) {
    
    var ycurr = 0.5 * Nos.perlin2(0.5 * xoff, yoffset) * height - ystep * yoffset;
    var foundOverlap = false;
    for (var yoffsetvar = yoffset; yoffsetvar < yoffsetMax; yoffsetvar += yoffsetInc) {
      var y = 
        0.5 
          * Nos.perlin2(0.5 * xoff, yoffsetvar) 
          * height 
        - ystep * yoffsetvar;
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

geo.scale(final, 0.07);
const cc = geo.getPoint(final, "cc");
geo.translate(final, [0, 0], cc);

renderShape({
  shape: final
})
  
 