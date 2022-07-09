const multiLib = require("multi-lib/library");

const dualCrafter = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "dual-crafter", [
    {
      input: {
        liquids: ["cryofluid/3"],
        power: 0.3
      },
      output: {
        items: ["publicmod-item-cryolite/3"]
      },
      craftTime: 80
    },
    {
          input: {
            liquids: ["publicmod-liquid-magma/3"],
            power: 0.4
          },
          output: {
            items: ["publicmod-item-magmite/3"]
          },
          craftTime: 80
        },
        {
          input: {
            items: ["publicmod-item-cryolite/3", "publicmod-item-magmite/3", "lead/6"],
            power: 0.6
          },
          output: {
            items: ["publicmod-item-dualium/3"]
          },
          craftTime: 120
        },
], {
  },
  function Extra() {
    this.draw=function(){
      let region1 = Core.atlas.find("publicmod-dual-crafter-bottom")
      Draw.rect(region1, this.x, this.y);
      let region2 = Core.atlas.find("publicmod-dual-crafter")
      Draw.rect(region2, this.x, this.y);
      let region3 = Core.atlas.find("publicmod-dual-crafter-top")
      Draw.rect(region3, this.x, this.y);
}
});
     
module.exports = {
  dualCrafter: dualCrafter,
}
