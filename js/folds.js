// @version: v0.1.0
const { Turtle, noise } = art;

const t = new Turtle();

function lerp(start, end, t) {
    return (1 - t) * start + t * end;
}

let maxI = 333;
let maxJ = 52;
for (let j = -maxJ; j < maxJ; j++) {
  for (let i = 0; i < maxI; i++) {
    if (i == 0) t.up();
    else t.down();
    let x = i/5 + noise(i*0.12)*Math.cos(j/9)*-2;
      // Math.cos(i)
      // lerp(0, i, Math.abs(i)/maxI)*
      // Math.sin(i/14)
      // + noise(i/81, j*-0.1)
      // + noise(i/24, j/15.4)
      // + i*0.04;
    let y = 1.5*Math.sin(i/5)
      *lerp(1, 0, Math.abs(j)/maxJ)
      // + noise(x/81, j*-0.1)
      + noise(i/24, j/15.7)
      + j*0.20;
      // + noise((i*0.014)+(j*51))*3.0 
      // + noise(j/11)
      // + noise(j*54)*14; 

    t.goTo(x, y);
  }
}

t.scale(0.39);
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