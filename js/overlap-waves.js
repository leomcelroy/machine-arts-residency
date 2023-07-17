// @version: v0.1.0
const { Turtle, noise } = art;

const t = new Turtle();

let maxI = 493;
for (let j = 0; j < +23; j++) {
  for (let i = 0; i < maxI; i++) {
    if (i == 0) t.up();
    else t.down();
    let x = i/12;
    let y = Math.sin(x)*1/5
      + j*0.61 
      + noise((i*0.014)+(j*51))*3.0 
      // + noise(i*1/145) 
      // + noise(j*54)*14; 
    
    t.goTo(x, y);
  }
}

t.scale(0.4)

const extrema = t.extrema();
t.translate(
  17/2,
  11/2,
  [ 
    (extrema.xMin+extrema.xMax)/2, 
    (extrema.yMin+extrema.yMax)/2,
  ]
)

t.applyPts(pt => [pt.x, pt.y]);


renderShape({
  shape: t.path,
  // fill: "white"
})




const limit0 = pt(0, 0);
const limit1 = pt(17, 11);
const xMin = Math.min(limit0[0], limit1[0]);
const xMax = Math.max(limit0[0], limit1[0]);
const yMin = Math.min(limit0[1], limit1[1]);
const yMax = Math.max(limit0[1], limit1[1]);

setWorkarea({
  x: [xMin, xMax],
  y: [yMin, yMax]
})


// drawTurtles(t);
// runMachine();