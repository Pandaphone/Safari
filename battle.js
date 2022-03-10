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

    //let defMod = 1 * level;

     defend() {
      //this.def += defMod;
      //let statusUpdate = document.getElementsByClassName("txt-display");
      console.log("$(this.name) has increased their DEF!");
    }
  }
}

let guy = new Player("Dood", 10, 5, 1, 1, 1, 1);

let defendButton = document.getElementsByClassName("defBtn");
defendButton.addEventListener("click", guy.defend());
