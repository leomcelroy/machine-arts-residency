const t = new Turtle();

for (let j = 0; j < +23; j++) {
  for (let i = 0; i < +549; i++) {
    if (i == 0) t.up();
    else t.down();
    let x = i/18;
    let y = noise((i+j*35)/117)*8+j*0.58+noise(j*31);
    
    t.goTo(x, y);
  }
}

t.scale(0.5)

t.translate(0, 0)


drawTurtles(t);
// runMachine();