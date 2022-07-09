// luxDuck's content

// rip

const ripDiskBack = extend(BasicBulletType, {
    width: 18,
    height: 18,

    damage: 60,
    speed: 3,
    shrinkY: 0,
    spin: -3,
    lifetime : 40,
    sprite: "large-bomb",
    pierce: true,

    despawnEffect: Fx.hitLancer,
    hitEffect: Fx.hitLancer,
    frontColor: Color.valueOf("ffffff"),
    backColor: Color.valueOf("33AEDA"),
});

const ripDisk = extend(BasicBulletType, {
    width : 18,
    height: 18,

    damage : 60,
    speed : 3,
    shrinkY: 0,
    spin: 3,
    lifetime : 40,
    sprite: "large-bomb",
    pierce : true,

    despawnEffect: Fx.hitLancer,
    hitEffect: Fx.hitLancer,
    shootEffect: Fx.hitLancer,
    frontColor : Color.valueOf("ffffff"),
    backColor  : Color.valueOf("33AEDA"),

    despawned(b){
        ripDiskBack.create(b, b.x, b.y, b.rotation() - 180, 1, 1);
    }
});

const rip = extend(PowerTurret, "rip", {
    shootType: ripDisk,
    recoilAmount: 4,
});

// end rip
// shred

const shredDiskBack = extend(BasicBulletType, {
    width: 26,
    height: 26,

    damage: 120,
    speed: 3,
    shrinkY: 0,
    spin: -3,
    lifetime : 40,
    sprite: "large-bomb",
    pierce: true,

    despawnEffect: Fx.hitLancer,
    hitEffect: Fx.hitLancer,
    frontColor: Color.valueOf("ffffff"),
    backColor: Color.valueOf("33AEDA"),
});

const shredDisk = extend(BasicBulletType, {
    width : 26,
    height: 26,

    damage : 120,
    speed : 3,
    shrinkY: 0,
    spin: 3,
    lifetime : 40,
    sprite: "large-bomb",
    pierce : true,

    despawnEffect: Fx.hitLancer,
    hitEffect: Fx.hitLancer,
    shootEffect: Fx.hitLancer,
    frontColor : Color.valueOf("ffffff"),
    backColor  : Color.valueOf("33AEDA"),

    despawned(b){
        shredDiskBack.create(b, b.x, b.y, b.rotation() - 180, 1, 1);
    }
});

const shred = extend(PowerTurret, "shred", {
    shootType: shredDisk,
    recoilAmount: 6,
});

// end shred
// crow

const crowLaser = extend(LaserBulletType, {
    colors : [Color.valueOf("e56666"),Color.valueOf("e56666"),Color.valueOf("ffffff")],
    hitEffect : Fx.hitMeltdown,
    despawnEffect : Fx.none,
    damage: 65,
    hitSize : 16,
    lifetime : 36,
    length : 180,
    width : 7,
    sideLength: 0,
    sideWidth: 0,
    sideAngle: 0,
});

const crow = extend(PowerTurret, "crow", {});
crow.buildType = () => extend(PowerTurret.PowerTurretBuild, crow, {
    creload : 0,
    updateTile(){
        this.super$updateTile();

        if(this.isShooting() && this.power.status > 0.5 && this.hasAmmo() && this.creload >= 30){
            this.creload = 0
            crowLaser.create(this, this.team, this.x, this.y, this.rotation)
            Fx.blastExplosion.at(this.x, this.y)
            Sounds.bigshot.at(this)
        }
        else{
            if(this.creload < 30){this.creload += 1} 
        }
    },
});

// end crow
// hawk

const hawkOrbBeam = extend(ShrapnelBulletType, {
    width : 10,
    length: 40,
    serrations: 6,

    damage : 105,
    lifetime : 20,
    pierce : true,

    hitEffect: Fx.hitLancer,
    fromColor : Color.valueOf("e56666"),
    toColor  : Color.valueOf("e56666"),
});

const hawkOrb = extend(MissileBulletType, {
    width : 6,
    height: 6,

    damage : 75,
    speed : 1,
    shrinkY: -1.3,
    shrinkX: -1.3,
    lifetime : 100,
    homingPower: 2,
    sprite: "circle-bullet",
    pierce : true,

    trailColor: Color.valueOf("e56666"),
    trailWidth: 3,
    trailLength: 30,
    weaveScale: 0,
    weaveMag: 0,
    trailChance: 1,
    hitEffect: Fx.massiveExplosion,
    despawnEffect: Fx.massiveExplosion,
    frontColor : Color.valueOf("e56666"),
    backColor  : Color.valueOf("e56666"),

    fragBullet: hawkOrbBeam,
    fragBullets: 6,
    fragCone: 75
});

const hawk = extend(PowerTurret, "hawk", {
    shootType: hawkOrb,
    recoilAmount: 4,
    range: 150,
});

// end hawk
// vulture

const vultureSpear = extend(LaserBulletType, {
    colors : [Color.valueOf("e56666"),Color.valueOf("e56666"),Color.valueOf("ffffff")],
    hitEffect : Fx.hitMeltdown,
    despawnEffect : Fx.massiveExplosion,
    damage: 120,
    pierceCap: 3,
    hitSize : 16,
    speed: 3,
    lifetime : 60,
    length : 50,
    width : 14,
    sideAngle: 145,
});

const vulture = extend(PowerTurret, "vulture", {
    shootType: vultureSpear,
    recoilAmount: 4,
    range: 150,
});

// end vulture

// end luxDuck's content
