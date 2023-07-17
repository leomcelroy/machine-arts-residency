// @version: v0.1.0
 // drop in SVGs
const { scale, translate, rotate, originate } = geo;
const { Turtle, Nos, noise, randInRange, lerp } = art; 

let grass = [];

for (let i = 0; i < +73; i++) {
  const blade = [ createBlade() ];
  const x = i*0.5+.2*Nos.perlin2(i/2, i/7)*6;
  const y = randInRange(0, 3) + Nos.perlin2(i/94, i/62);
  translate(blade, [x, y]);
  
  grass.push([y, blade]);
}
grass.sort((a, b) => b[0] - a[0]);
grass = grass.map(x => x[1]).flat();

let ground = [];
for (let i = 0; i < +48; i++) {
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

let sky = [];
for (let i = 0; i < +67; i++) {
  const t = new Turtle();
  t.left(-6);

  for (let j = 0; j < +29; j++) {
    t.forward(randInRange(5, 8)*0.3);
    t.left(3)
    t.up();
    t.forward(randInRange(5, 8)*0.4);
    t.left(3)
    t.down();
  }


  t.translate(i*1.1, 0)
  t.ptArrs();
  sky.push(...t.path)
}

const rect = geo.rectangle(133, 38);
translate(rect, [-43, 1])

rotate(sky, 218)

translate(sky, pt(-56, 5));

translate(ground, pt(-97, 7));

translate(grass, [-34, 14])

const frame = geo.rectangle(133, 38);
translate(frame, pt(-13.462, 29.708))


final = [...sky, ...rect, ...ground, ...grass]
// geo.difference(final, frame)

// scale(final, 0.3);
// originate(final);
// translate(final, pt(3.726, 2.774))

final.forEach(poly => {
  renderShape({
    shape: [poly],
    stroke: "black",
    fill: "white"
  });
})


setWorkarea({
  x: [ 0, 8.5 ],
  y: [ 0, 11 ]
});


function createBlade() {
  let t = new Turtle();
  t.left(90);
  for (let i = 0; i < 10; i++) {
    t.forward(1);
    t.right(randInRange(-7, 7))
  }
  t.ptArrs();
  
  let bladeSide0 = [];
  let bladeSide1 = [];
  t.path[0].forEach((pt, i, arr) => {
    const [x, y] = pt;
    bladeSide0.push([
      x - lerp(.6, .05, i/arr.length),
      y
    ]);
    
    bladeSide1.push([
      x + lerp(.6, .05, i/arr.length),
      y
    ]);
  })
  
  const blade = [
    ...bladeSide0.reverse(),
    ...bladeSide1,
    bladeSide0.at(0)
  ]

  return blade;
}

