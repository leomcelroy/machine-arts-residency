// @version: v0.1.0
const { Turtle, noise, lerp, randInRange } = art;

const t = new Turtle();

function makeWave(p0Seed, h0Seed, p1Seed, h1Seed, p2Seed) {
  const p0 = [p0Seed[0] + randInRange(-0.3, 0.3), p0Seed[1] + randInRange(-0.3, 0.3)];
  const h0 = [h0Seed[0] + randInRange(-0.3, 0.3), h0Seed[1] + randInRange(-0.3, 0.3)];
  const p1 = [p1Seed[0] + randInRange(-0.3, 0.3), p1Seed[1] + randInRange(-0.3, 0.3)];
  const h1 = [p2Seed[0] + randInRange(-0.3, 0.3), h1Seed[1] + randInRange(-0.3, 0.3)];
  const p2 = [p2Seed[0] + randInRange(-0.3, 0.3), p2Seed[1] + randInRange(-0.3, 0.3)];
  
  return path( p0, [ "cubic", h0, p1, h1 ], p2,);
}

const p0Seed = pt(9.1, 7.2);
const h0Seed = pt(6.09, 7.198);
const p1Seed = pt(6.331, 8.402);
const h1Seed = pt(4.934, 7.679);
const p2Seed = pt(4.163, 7.053);

const templateWave = path( [9.161, 7.23], [ "cubic", [7.298, 7.802], [6.229, 7.762], [5.160, 7.722] ], [4.283, 7.256],)

const final = [];

let maxX = 18;
let maxY = 13;
for (let y = 0; y < maxY; y++) {
  for (let x = 0; x < maxX; x++) {
    if (Math.random() < .1) continue;
    const wave = [ 
      makeWave(
        p0Seed, 
        h0Seed, 
        [ p1Seed[0] - y/19, p1Seed[1] - y/10 ], 
        [ h1Seed[0] - y/15, h1Seed[1] - y/14 ], 
        p2Seed
      ) 
    ];
    
    geo.scale(wave, .5);
    geo.translate(wave, [
      x*0.88+noise(x*6, y*2), 
      y+noise(x*2, y*5)*2
    ]);
    final.push(wave[0])
    
  }
}

geo.translate(final, pt(-7.389, -8));

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
  shape: final,
  // fill: "white"
})




const limit0 = [0, 0];
const limit1 = [10, 16];
const xMin = Math.min(limit0[0], limit1[0]);
const xMax = Math.max(limit0[0], limit1[0]);
const yMin = Math.min(limit0[1], limit1[1]);
const yMax = Math.max(limit0[1], limit1[1]);

setWorkarea({
  x: [xMin, xMax],
  y: [yMin, yMax]
})

