// @version: v0.1.0
const { Turtle, noise } = art;

const t = new Turtle();

function lerp(start, end, t) {
    return (1 - t) * start + t * end;
}

let maxI = 160;
let maxJ = 120;
for (let j = 0; j < maxJ; j++) {
  for (let i = 0; i < maxI; i++) {
    if (i == 0) t.up();
    else t.down();
    
    let x = i/4
      + noise([i/10, j/23], { octaves: 1, falloff: 0.01 })*4.7

    const scale = lerp(0, 1, j/maxJ);
    let y = 
      (
        -1.9*noise(Math.sin(i/8))
        + noise([i/6, j/27], { octaves: 5, falloff: 0.6 })*0.8
      ) 
        // * scale
        // * 0
        * lerp(0, 1, j/maxJ)
        // * 1-Math.abs(lerp(-1, 1, j/maxJ))
        // * customInterpolation(j/maxJ)
        // * Math.abs( (j/maxJ-.5)*2 )
      + j*0.22;


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




const limit0 = pt(-0.091, -0.236);
const limit1 = pt(16.962, 11.26);
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