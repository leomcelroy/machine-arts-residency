// @version: v0.1.0
const {
  Turtle, Nos
} = art;

const circle = geo.circle(2);
geo.translate(circle, pt(3.228, 7.277));


let final = [ ...circle ];

function bulb(source, step, maxI) {
  for (let a = 0; a < 360; a++) {
    const t = new Turtle({ x: source[0], y: source[1] });
    t.right(a);
    for (let i = 0; i < maxI; i++) {
      t.forward(step);
      const end = t.end;
      if (isPointInPolygon(end, circle[0])) {
        t.applyPts(pt => [pt.x, pt.y]);
        final.push(...t.path);
        break;
      }
    }
  }
}

bulb(pt(12.923, 7.546), 0.03, 1000)

for (let i = 0; i < 10; i++) {
  const t = new Turtle();
  
}

function isPointInPolygon(point, polygon) {
  var x = point[0], y = point[1];

  var inside = false;
  for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      var xi = polygon[i][0], yi = polygon[i][1];
      var xj = polygon[j][0], yj = polygon[j][1];

      var intersect = ((yi > y) !== (yj > y)) &&
          (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
  }

  return inside;
};



final = final.filter(pl => pl.length > 1)

const finalWidth = 15.74015748031496;
const finalHeight = 10.05511811023622;

// geo.scale(final, -0.07);
// const cc = geo.getPoint(final, "cc");
// geo.translate(final, [finalWidth/2, finalHeight/2], cc);

const border = new Turtle();
border.forward(finalWidth);
border.right(-90);
border.forward(finalHeight);
border.right(-90);
border.forward(finalWidth);
border.right(-90);
border.forward(finalHeight);
// border.scale(.99);

border.applyPts(pt => [pt.x, pt.y]);

renderShape({
  shape: final
})

setWorkarea({
  x: [0, finalWidth],
  y: [0, finalHeight]
})
  
 