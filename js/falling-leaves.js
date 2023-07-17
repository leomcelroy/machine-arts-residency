// @version: v0.1.0
 // drop in SVGs
const { scale, translate, rotate, originate } = geo;
const { Turtle, Nos, lerp, randInRange, rand, randomIntFromRange } = art; 



function makeLeaf(seed) {
  Nos.seed(seed);
  
  const final = [];

  const leafOutline = path([0, 0], [0.672, -0.065], [0.664, 1.582], [ "cubic", [1.546, 2.219], [1.976, 3.036], [2.268, 3.590] ], [ "cubic", [2.433, 4.820], [2.353, 5.615], [2.267, 6.474] ], [ "cubic", [1.571, 7.296], [1.020, 8.658], [0.006, 7.702] ], [ "cubic", [-0.516, 7.238], [-0.922, 6.427], [-1.225, 5.679] ], [ "cubic", [-1.295, 4.331], [-1.037, 3.558], [-0.652, 2.405] ], [0.006, 1.587], [0, 0], )
  
  applyFn([ leafOutline ], (pt, i, arr) => {
    const [ x, y ] = pt;
  
    if (
      i === 0 
      || i === 1 
      || i === arr.length - 1
      || i === arr.length - 2
    ) return pt;
  
    return [
      x
        + (0.11*Nos.perlin2(1*x, 1*y))
        + (0.06*Nos.perlin2(2*x, 2*y))
        + (0.03*Nos.perlin2(4*x, 4*y))
        + (0.06*Nos.perlin2(200*x, 200*y)),
      y
        + (0.01*Nos.perlin2(1*x, 1*y))
        + (0.04*Nos.perlin2(2*x, 2*y))
        + (0.11*Nos.perlin2(4*x, 4*y)),
    ]
  });
  
  const h = geo.height([leafOutline]);
  const cc = geo.getPoint([leafOutline], "cc");
  
  const centerVein =   [ 
    [ cc[0]-0.3, lerp(0, h, randInRange(0.3, 0.4)) ],
    [ cc[0]+0.14, lerp(0, h, randInRange(0.7, 0.9)) ]
  ];
  
  resamplePolyline(centerVein, .03);
  
  applyFn([ centerVein ], (pt, i, arr) => {
    const [ x, y ] = pt;
  
    if (
      i === 0 
      || i === 1 
      || i === arr.length - 1
      || i === arr.length - 2
    ) return pt;
  
    return [
      x
        + (0.11*Nos.perlin2(1*x, 1*y))
        + (0.06*Nos.perlin2(2*x, 2*y)),
      y
        + (0.01*Nos.perlin2(1*x, 1*y)),
    ]
  });
  
  final.push(
    leafOutline,
    centerVein
  );

  final.push(...drawVeins(1), ...drawVeins(-1));

  return final;
  
  function drawVeins(leftOrRight) {
    const veins = [];
    let last = 0;
    centerVein.forEach((pt, i, arr) => {
      const [ x , y ] = pt;
      
      if ((y - last) < +0.15) return;
      if (rand() < +0.9) return
      
      const newVein = [];
    
      const maxI = bellCurve(h*0.2, h*1.6, i/arr.length);
      for (let i = 0; i < maxI; i++) {
        newVein.push([
          x+i/12*leftOrRight, 
          y+Nos.perlin2(y*.04, i*0.17)*0.09
        ]);
      }
    
      last = y;
      veins.push(newVein);
      
    })
  
    return veins;
  }
}


const final = [];



for (let i=0; i < 15; i+=1) {
  for (let j=0; j < 9; j += 1) {
    let dx = Nos.perlin2(i*2.3,j*0.6);
    let dy = Nos.perlin2(i*2.9,j*1.0);
    
    const line = [
      [i, j],
      [i+dx*0.2, j+dy*0.2]
    ];

        
    final.push(line);

    let leaf = makeLeaf(i*j);
    geo.transform(leaf, {
      dx: 0,
      dy: 0,
      sx: randInRange(.8, 1.2),
      sy: randInRange(.8, 1.2),
      rotate: 0,
      skew: randInRange(-.2, .2)
    })
    geo.scale(leaf, 0.08);
    geo.originate(leaf);
    rotateShape(leaf, dx, dy);
    geo.translate(leaf, [i, j]);
    
    final.push(...leaf)
  }
}


// geo.originate(final);
// geo.scale(final, 0.14);
const cc = geo.getPoint(final, "cc");
geo.translate(final, [8, 5], cc);


renderShape({
  shape: final,
  stroke: "black",
  fill: "none"
});

setWorkarea({
  x: [ 0, 15.75 ],
  y: [ 0, 10 ]
});


function resamplePolyline(polyline, maxDist) {
    let tempPolyline = [polyline[0]];

    for(let i = 0; i < polyline.length - 1; i++) {
        let dx = polyline[i + 1][0] - polyline[i][0];
        let dy = polyline[i + 1][1] - polyline[i][1];
        let dist = Math.sqrt(dx * dx + dy * dy);

        if(dist <= maxDist) {
            tempPolyline.push(polyline[i + 1]);
        } else {
            let numSegments = Math.ceil(dist / maxDist);

            for(let j = 1; j <= numSegments; j++) {
                let t = j / numSegments;
                tempPolyline.push([
                    polyline[i][0] + dx * t,
                    polyline[i][1] + dy * t
                ]);
            }
        }
    }

    // Clear the original polyline
    polyline.length = 0;

    // Copy the vertices from tempPolyline into the original polyline
    for(let i = 0; i < tempPolyline.length; i++) {
        polyline.push(tempPolyline[i]);
    }
}

function applyFn(shape, fn) {
  shape.forEach(pl => {
    pl.forEach((pt, i, arr) => {
      const newPt = fn(pt, i, arr);
      pt[0] = newPt[0];
      pt[1] = newPt[1];
    })
  })
}

function bellCurve(min, max, t) {
    return Math.exp(-Math.pow(t - 0.5, 2) / 0.05)*(max-min)+min;
}

function normalDistribution(t) {
    const mu = 0.5; // Mean of the distribution
    const sigma = 0.1; // Standard deviation of the distribution

    return (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((t - mu) / sigma, 2));
}

function applyPerspective(polygons, angle) {
    let perspectiveMatrix = [
        [1, 0, 0],
        [0, 1, 0],
        [-Math.cos(angle), -Math.sin(angle), 1]
    ];

    let transformedPolygons = polygons.map(polygon => {
        return polygon.map(point => {
            let homogeneousPoint = [...point, 1];
            let transformedPoint = [0, 0, 0];
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    transformedPoint[i] += perspectiveMatrix[i][j] * homogeneousPoint[j];
                }
            }

            // Convert back from homogeneous coordinates
            transformedPoint[0] /= transformedPoint[2];
            transformedPoint[1] /= transformedPoint[2];
            transformedPoint.pop();

            return transformedPoint;
        });
    });

    return transformedPolygons;
}

function rotateShape(shape, dx, dy) {
    let angle = Math.atan2(dy, dx); // angle in radians

    for (let i = 0; i < shape.length; i++) {
        for (let j = 0; j < shape[i].length; j++) {
            let x = shape[i][j][0];
            let y = shape[i][j][1];

            // rotate
            shape[i][j][0] = x * Math.cos(angle) - y * Math.sin(angle);
            shape[i][j][1] = x * Math.sin(angle) + y * Math.cos(angle);
        }
    }
}

