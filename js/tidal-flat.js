// @version: v0.1.0
 // drop in SVGs
const { scale, translate, rotate, originate } = geo;
const { Turtle, Nos, rand, randInRange, randomIntFromRange, lerp, PoissonDiscGrid, SimplexNoise } = art; 


const seed = 69; // min=1, max=100, step=1
const radius = 1.3; // min=0.1, max=5, step=0.01
const maxPathLength = 50;  // min=1, max=100, step=0.1
const frequency = 2; //min=.1, max=10, step=.01
const maxTries = 1000;

const noise = new SimplexNoise(seed);
const grid  = new PoissonDiscGrid(radius);

let grass = [];

for (let i = 0; i < +212; i++) {
  const blade = [ createBlade() ];
  const x = i*0.45+0.05*noise.noise2D([i/2.2, i/7.2])*7.0;
  const y = randInRange(0, 3) + 0.28*noise.noise2D([i/92, i/71]);
  translate(blade, [x, y]);
  
  grass.push([y, blade]);
}
grass.sort((a, b) => b[0] - a[0]);
grass = grass.map(x => x[1]).flat();

let ground = [];
for (let i = 0; i < +72; i++) {
  const t = new Turtle();
  t.left(13);

  for (let j = 0; j < +49; j++) {
    t.forward(randInRange(1, 3)*0.3);
    t.up();
    t.forward(randInRange(1, 2)*0.4);
    t.down();
  }


  t.translate(i*2.0, 0)
  t.ptArrs();
  ground.push(...t.path)
}

let sky = swirl();
scale(sky, .4)
rotate(sky, 270)

const rect = geo.rectangle(168, 126);
translate(rect, pt(14.579, 51.8))

removeOutsidePolylines(sky, rect[0]);

translate(sky, pt(20.079, 48.252));

translate(ground, pt(-75.863, 24.114));

translate(grass, pt(-25.448, 30.53))

const frame = geo.rectangle(75, 66);
translate(frame, [0, 0], geo.getPoint(frame, "lb"));
translate(frame, pt(-16, 5))


final = [
  ...sky, 
  ...ground, 
  ...grass
];

removeOutsidePolylines(final, frame[0]);


scale(final, 0.2);
originate(final);
translate(final, pt(15.75/2, 5))

final.forEach(poly => {
  renderShape({
    shape: [poly],
    stroke: "black",
    fill: "white"
  });
})


setWorkarea({
  x: [ 0, 15.75 ],
  y: [ 0, 10 ]
});


function createBlade() {
  let t = new Turtle();
  t.left(90);
  for (let i = 0; i < randomIntFromRange(6, 10); i++) {
    t.forward(randInRange(.5, 2));
    t.right(randInRange(-7, 7))
  }
  t.ptArrs();
  
  let bladeSide0 = [];
  let bladeSide1 = [];
  const bottom = 0.416;
  const top = 0.043;
  t.path[0].forEach((pt, i, arr) => {
    const [x, y] = pt;
    bladeSide0.push([
      x - lerp(bottom, top, i/arr.length),
      y
    ]);
    
    bladeSide1.push([
      x + lerp(bottom, top, i/arr.length),
      y
    ]);
  })
  
  const blade = [
    ...bladeSide0.reverse(),
    ...bladeSide1,
    [...bladeSide0.at(0)]
  ]

  return blade;
}

function pointInPolygon(point, polygon) {
    let crosses = 0;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        if (((polygon[i][1] > point[1]) != (polygon[j][1] > point[1])) &&
             (point[0] < (polygon[j][0] - polygon[i][0]) * (point[1] - polygon[i][1]) / 
             (polygon[j][1] - polygon[i][1]) + polygon[i][0])) {
            crosses++;
        }
    }
    return crosses % 2 > 0;
}

function removeOutsidePolylines(polylines, polygon) {
    let i = 0;
    while (i < polylines.length) {
        if (polylines[i].some(point => !pointInPolygon(point, polygon))) {
            polylines.splice(i, 1);
        } else {
            i++;
        }
    }
}

// Curl Noise. Created by Reinder Nijhoff 2021 - @reindernijhoff
//
// https://turtletoy.net/turtle/740f09b88c
//

function swirl() {
  const turtle = new Turtle();
  turtle.setAngle(0);
  turtle.traveled = 0;

  while (walk()){}

  turtle.ptArrs();

  return turtle.path;
  
  function fbm(x, y) {
      x *= frequency / 1000;
      y *= frequency / 1000;
      let f = 1., v = 0.;
      for (let i=0; i<3; i++) {
          v += noise.noise2D([x * f, y * f]) / f;
          f *= 2; x += 32;
      }
      return v;
  }
  
  function curlNoise(x, y) {
      const eps = 0.01;
      
      const dx = (fbm(x, y + eps) - fbm(x, y - eps))/(2 * eps);
      const dy = (fbm(x + eps, y) - fbm(x - eps, y))/(2 * eps);
      
      const l = Math.hypot(dx, dy) / radius * .99;
      return [dx / l, -dy / l];	
  }
  
  function walk() {
      const p = turtle.pos;
      // console.log(p);
  
      const curl = curlNoise(p[0], p[1]);
      const dest = [p[0]+curl[0], p[1]+curl[1]];
  
      // console.log(dest);
      
      if (turtle.traveled < maxPathLength && Math.abs(dest[0]) < 110 && Math.abs(dest[1]) < 110 && grid.insert(dest)) {
          turtle.goTo(...dest);
          turtle.traveled += Math.hypot(curl[0], curl[1]);
  
          // console.log("done");
      } else {
          turtle.traveled = 0;
          let r = [0, 0];
          let i = 0;
          do { 
              r =[Math.random()*200-100, Math.random()*200-100];
              i ++;
          } while(!grid.insert(r) && i < maxTries);
          if (i >= maxTries) {
              return false;
          }
        
          turtle.up();
          turtle.goTo(...r);
          turtle.down();
      }
    
      return true;
  }

}
  










