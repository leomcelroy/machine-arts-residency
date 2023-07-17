// @version: v0.1.0
const { Turtle, noise } = art;

const t = new Turtle();

function lerp(start, end, t) {
    return (1 - t) * start + t * end;
}

let maxI = 194;
let maxJ = 86;
for (let j = 0; j < maxJ; j++) {
  for (let i = 0; i < maxI; i++) {
    if (i == 0) t.up();
    else t.down();
    let x = i/5
      + noise([i/5, j/16], { octaves: 4, falloff: -0.1 })*3.5

    let y = 
      (
        3.2*noise(Math.sin(i/7))
        + noise([i/4, j/33], { octaves: 5, falloff: .6 })
      ) 
        * lerp(-1, 1, j/maxJ)
        // * 1-Math.abs(lerp(-1, 1, j/maxJ))
        // * customInterpolation(j/maxJ)
        // * Math.abs( (j/maxJ-.5)*2 )
      + j*0.24;

    // console.log(j, maxJ, j/maxJ,  Math.abs(1-lerp(-1, 1, j/maxJ)));
    t.goTo(x, y);
  }
}

function cubicInterpolation(start, end, t) {
    let t2 = t * t;
    let t3 = t2 * t;

    return (2 * t3 - 3 * t2 + 1) * start + (-2 * t3 + 3 * t2) * end;
}

function customInterpolation(t) {
    if (t <= 0 || t >= 1) {
        return 0;
    } else if (t <= 0.5) {
        return 2 * t;
    } else {
        return -2 * t + 2;
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