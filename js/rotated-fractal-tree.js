// @version: v0.1.0
const { gram } = art;
const newGram = () => new gram.Turtle();

// tree
const rules = {
  "X": "F-[[X]+X]+F[+FX]-X",
  "F": "FF",
}

const a = 27;

const instructions = {
  "F": t => t.forward(10),
  "X": t => t.forward(10),
  "+": t => t.right(a),
  "-": t => t.left(a),
  "[": t => t.store(),
  "]": t => t.restore()
}

let t = newGram()
	.right(270)
  .lSystem({
    axiom: "X",
    steps: 5,
    rules,
    instructions,
  })
	.originate()
	.thicken(7)
	.originate()

let n = 6;

t.copyPaste(7, t => {
  	return t

      .rotate(360/(n+1), [-93.3, -394.2])
  })
	.outline()

const final = [];

t.path.forEach(pl => {
  console.log(pl.points);
  const pts = pl.points.map(({ x, y }) => [x, y]);
  final.push(pts);
})

geo.scale(final, .0055);
const cc = geo.getPoint(final, "cc");
geo.translate(final, [15.75/2, 10/2], cc);

renderShape({
  shape: final
})

setWorkarea({
  x: [ 0, 15.75 ],
  y: [ 0, 10 ]
});
  // .draw()

