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

const p0Seed = pt(8.585, 7.033);
const h0Seed = pt(6.447, 7.519);
const p1Seed = pt(6.253, 8.328);
const h1Seed = pt(4.934, 7.679);
const p2Seed = pt(4.163, 7.053);

const templateWave = path( [9.161, 7.23], [ "cubic", [7.298, 7.802], [6.229, 7.762], [5.160, 7.722] ], [4.283, 7.256],)

const final = [];

const perturb = (pt, min , max) => {
  const dx = randInRange(min, max);
  const dy = randInRange(min, max);

  return vec.add(pt, [dx, dy]);
}

let maxX = 8;
let maxY = 50;
for (let y = 0; y < maxY; y++) {
  const row = [];
  let last = null;

  for (let x = 0; x < randomIntFromRange(8, 9); x++) {
    // if (Math.random() < .1) continue;
    const p0 = p0Seed;
    const h0 = perturb(h0Seed, -0.5, 0.3);
    const p1 = vec.sub(
      perturb(p1Seed, -0.3, 0.3),
      [0, y/(maxY/0.7)]
    );
    const h1 = perturb(h1Seed, -0.3, 0.3);
    const p2 = p2Seed;
    
    const wave = 
      [
        path( p0, [ "cubic", h0, p1, h1 ], p2,)
      ]
    
    // const wave = [ 
    //   makeWave(
    //     p0Seed, 
    //     h0Seed, 
    //     [ p1Seed[0] - y/19, p1Seed[1] - y/10 ], 
    //     [ h1Seed[0] - y/15, h1Seed[1] - y/14 ], 
    //     p2Seed
    //   ) 
    // ];
    
    geo.scale(wave, 0.21);
    const first = geo.getPoint(wave, "start");
    geo.translate(wave, last ?? [0, 0], first);
    row.push(...wave)

    last = geo.getPoint(wave, "end");
    
  }

  geo.translate(row, [
    rand()*1.3,
    y*0.2
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

