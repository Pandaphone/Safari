class Entity {
  constructor(name, fullHP, curHP, atk, def, spd) {
    this.name = name;
    this.fullHP = fullHP;
    this.curHP = curHP;
    this.atk = atk;
    this.def = def;
    this.spd = spd;

    function attack() {}
  }
}

class Player extends Entity {
  constructor(name, fullHP, curHP, atk, def, spd, level) {
    super(name, fullHP, curHP, atk, def, spd);
    this.level = level;

    let defMod = 1 * level;

    function defend() {
      this.def += defMod;
      let statusUpdate = document.getElementsByClassName("txt-display");
      statusUpdate.innerHTML("$(this.name) has increased their DEF!");
    }
  }
}
