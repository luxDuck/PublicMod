const redBlast = new Effect(40, 100, e => {
    Draw.color(Color.valueOf("e56666"));
    Lines.stroke(e.fout() * 2);
    Lines.circle(e.x, e.y, e.finpow() * 20);

    Draw.color(Color.valueOf("e56666"));
    for(let i = 0; i < 4; i++){
        Drawf.tri(e.x, e.y, 6, 10 * e.fout(), i*90+45);
    }

    Draw.color();
    for(let i = 0; i < 4; i++){
        Drawf.tri(e.x, e.y, 3, 3 * e.fout(), i*90+45);
    }
});

const blueBlast = new Effect(40, 100, e => {
    Draw.color(Color.valueOf("544deb"));
    Lines.stroke(e.fout() * 2);
    Lines.circle(e.x, e.y, e.finpow() * 20);

    Draw.color(Color.valueOf("544deb"));
    for(let i = 0; i < 4; i++){
        Drawf.tri(e.x, e.y, 6, 10 * e.fout(), i*90+45);
    }

    Draw.color();
    for(let i = 0; i < 4; i++){
        Drawf.tri(e.x, e.y, 3, 3 * e.fout(), i*90+45);
    }
});

const greenBlast = new Effect(40, 100, e => {
    Draw.color(Color.valueOf("54d67d"));
    Lines.stroke(e.fout() * 2);
    Lines.circle(e.x, e.y, e.finpow() * 20);

    Draw.color(Color.valueOf("54d67d"));
    for(let i = 0; i < 4; i++){
        Drawf.tri(e.x, e.y, 6, 10 * e.fout(), i*90+45);
    }

    Draw.color();
    for(let i = 0; i < 4; i++){
        Drawf.tri(e.x, e.y, 3, 3 * e.fout(), i*90+45);
    }
});

const yellowBlast = new Effect(40, 100, e => {
    Draw.color(Color.valueOf("ffcd66"));
    Lines.stroke(e.fout() * 2);
    Lines.circle(e.x, e.y, e.finpow() * 20);

    Draw.color(Color.valueOf("ffcd66"));
    for(let i = 0; i < 4; i++){
        Drawf.tri(e.x, e.y, 6, 10 * e.fout(), i*90+45);
    }

    Draw.color();
    for(let i = 0; i < 4; i++){
        Drawf.tri(e.x, e.y, 3, 3 * e.fout(), i*90+45);
    }
});

const smallThorBlastSparks = new Effect(40, 100, e => {
    Draw.color(Color.valueOf("bf92f9"));
    Lines.stroke(e.fout() * 2);
    Lines.circle(e.x, e.y, e.finpow() * 20);

    Draw.color(Color.valueOf("bf92f9"));
    for(let i = 0; i < 4; i++){
        Drawf.tri(e.x, e.y, 6, 10 * e.fout(), i*90+45);
    }

    Draw.color();
    for(let i = -1; i < 1; i++){
        Drawf.tri(e.x, e.y, 3, 3 * e.fout(), i*25);
    }
});

const smallThorBlastSmoke = extend(ParticleEffect, {
particles: 6,
length: 65,
cone: 360,
lifetime: 30,
sizeFrom: 8,
sizeTo: 0,
colorFrom: Color.valueOf("bf92f9"),
colorTo: Color.valueOf("bf92f990"),
});

const smalThorBlast = new MultiEffect(smallThorBlastSmoke, smallThorBlastSparks);

module.exports = {
  redBlast: redBlast,
  blueBlast: blueBlast,
  greenBlast: greenBlast,
  yellowBlast: yellowBlast,
  smallThorBlast: smallThorBlast,
}
