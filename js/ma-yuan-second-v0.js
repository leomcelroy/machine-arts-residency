// @version: v0.1.0
const { Turtle, noise, lerp, randInRange, rand, randomIntFromRange } = art;

const t = new Turtle();

function makeWave(p0Seed, h0Seed, p1Seed, h1Seed, p2Seed) {
  const p0 = [p0Seed[0] + randInRange(-0.3, 0.3), p0Seed[1] + randInRange(-0.3, 0.3)];
  const h0 = [h0Seed[0] + randInRange(-0.3, 0.3), h0Seed[1] + randInRange(-0.3, 0.3)];
  const p1 = [p1Seed[0] + randInRange(-0.3, 0.3), p1Seed[1] + randInRange(-0.3, 0.3)];
  const h1 = [p2Seed[0] + randInRange(-0.3, 0.3), h1Seed[1] + randInRange(-0.3, 0.3)];
  const p2 = [p2Seed[0] + randInRange(-0.3, 0.3), p2Seed[1] + randInRange(-0.3, 0.3)];
  
  return path( p0, [ "cubic", h0, p1, h1 ], p2,);
}

const fold = (fn) => (v0, v1) => {
  return v0.map((x, i) => fn(x, v1[i]));
}

const vec = {
  fold,
  add: fold((x, y) => x+y),
  sub: fold((x, y) => x-y),
  // dot
  // cross
  // mag
  // norm
}

const templateWave = path( [10.04, 6.997], [ "cubic", [7.026, 7.026], [6.768, 9.149], [6.567, 9.551] ], [ "cubic", [6.509, 10.612], [8.375, 11.100], [5.649, 13.023] ], [ "cubic", [3.325, 9.579], [1.632, 8.173], [0.857, 7.599] ], [ "cubic", [-0.457, 6.698], [-1.921, 6.841], [-1.992, 7.133] ],)

const final = [];

const perturb = (pt, min , max) => {
  const dx = randInRange(min, max);
  const dy = randInRange(min, max);

  return vec.add(pt, [dx, dy]);
}

let maxX = 4;
let maxY = 19;
for (let y = 0; y < maxY; y++) {
  const row = [];
  let last = null;

  for (let x = 0; x < 4+y; x++) {
    // if (Math.random() < .1) continue;

    const wave = 
      [
        templateWave
      ]

  
    geo.scale(wave, 0.16/(y*0.32+1));
    const first = geo.getPoint(wave, "start");
    geo.translate(wave, last ?? [0, 0], first);
    row.push(...wave)

    last = geo.getPoint(wave, "end");
    
  }

  geo.translate(row, [
    noise(y)*3.3+y*0.04,
    1/((y+1)**-0.9)*0.5
  ]);

  final.push(...row)
}

const cc = geo.getPoint(final, "cc");
const target = [
  10/2,
  16/2 - 2.5,
]
geo.translate(
  final,
  target,
  cc,
)

// t.applyPts(pt => [pt.x, pt.y]);


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

