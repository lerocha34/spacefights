// Template geral de personagens
class character{

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name){
        this.name = name
    }

    get life(){
        return this._life;
    }

    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife;
    }
}
//Criando marine

class marine extends character{
    constructor (){
    super('Marine');
    this.life = 100;
    this.maxLife = 100;
    this.attack = 45;
    this.defense = 50;

}
}

var marineCharacter = new marine();
//criando Magician
class magician extends character{
    constructor (){
    super('Magician');
    this.life = 60;
    this.maxLife = 60;
    this.attack = 60;
    this.defense = 20;

}
}
var magicianCharacter = new magician();

//criando warrior
class warrior extends character{
    constructor (ne){
    super('Warrior');
    this.life = 120;
    this.maxLife = 120;
    this.attack = 75;
    this.defense = 65;

}
    
}
var warriorCharacter = new warrior();

//criando Naga
class naga extends character{
    constructor (){
    super('Naga');
    this.life = 150;
    this.maxLife = 150;
    this.attack = 40;
    this.defense = 25;
    }
}
var nagaCharacter = new naga();

//criando skullmage
class skullmage extends character{
    constructor (){
    super('Skull Mage');
    this.life = 200;
    this.maxLife = 200;
    this.attack = 55;
    this.defense = 60;
    }
}

var skullMageCharacter = new skullmage();
//criando Mutant shark
class mutantshark extends character{
    constructor (){
    super('Mutant Shark');
    this.life = 350;
    this.maxLife = 350;
    this.attack = 70;
    this.defense = 80;
    }
}
var mutantSharkCharacter = new mutantshark();

let hero = new character();
let monster = new character();
