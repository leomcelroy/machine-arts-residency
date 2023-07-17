// @version: v0.1.0
const {
  Turtle, Nos
} = art;

var inc = 0.13;
var yoffset = 18.1;
var yoffsetInc = 0.06;
var start = 0;
var yoffsetMax = 22;

let height = 22.6;
let width = 225;

let final = [];
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

const finalWidth = 15.74015748031496;
const finalHeight = 10.05511811023622;
final = final.filter(pl => pl.length > 1)

geo.scale(final, -0.07);
const cc = geo.getPoint(final, "cc");
geo.translate(final, [finalWidth/2, finalHeight/2], cc);

const border = new Turtle();
border.forward(finalWidth);
border.right(-90);
border.forward(finalHeight);
border.right(-90);
border.forward(finalWidth);
border.right(-90);
border.forward(finalHeight);
// border.scale(.99);

border.applyPts(pt => [pt.x, pt.y]);


renderShape({
  shape: final
})

setWorkarea({
  x: [0, finalWidth],
  y: [0, finalHeight]
})
  
 