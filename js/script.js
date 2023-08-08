



let heroChosen = false;
let monsterChosen = false;
var selectedHero = 1;
var selectedMonster = 1;


//seleção de herois
function choseMarine(){
    let marineChosen = document.querySelector('.chosen-hero');
  
    
    marineChosen.innerHTML = (
        '<img src="images/marine.png"/>'
    );

   /* marineChosen.innerHTML += (
    '<button class="hero-attack">Atacar</button>'
    );*/
    marineChosen.style.display='inline';
    heroChosen = true;
    selectedHero = 1;
    checkCombatLog();
    updateHealthBar();
    
}

function choseMagician(){
    let magicianChosen = document.querySelector('.chosen-hero');
  
    magicianChosen.innerHTML = (
        '<img src="images/magician.png"/>'
    );
    /*magicianChosen.innerHTML += (
        '<button class="hero-attack">Atacar</button>'
        );*/
    magicianChosen.style.display = 'inline';
    heroChosen = true;
    selectedHero = 2;
    checkCombatLog();
    updateHealthBar();

    
}

function choseWarrior(){
    let warriorChosen = document.querySelector('.chosen-hero');

    warriorChosen.innerHTML = (
        '<img src="images/warrior.png"/>'
    );
    /*warriorChosen.innerHTML += (
        '<button class="hero-attack">Atacar</button>'
        );*/
    warriorChosen.style.display = 'inline';
    heroChosen = true;
    selectedHero = 3;
    checkCombatLog();
    updateHealthBar();
    
}

let marineSelected = document.querySelector('.marine-button');
marineSelected.addEventListener('click', choseMarine);
let magicianSelected = document.querySelector('.magician-button');
magicianSelected.addEventListener('click', choseMagician);
let warriorSelected = document.querySelector('.warrior-button');
warriorSelected.addEventListener('click', choseWarrior);


//seleção de monstros
function choseNaga(){
    let nagaChosen = document.querySelector('.chosen-enemy');
    nagaChosen.innerHTML = (
        '<img src="images/naga.png"/>'
    )
    nagaChosen.style.display = 'inline';
    monsterChosen = true;
    selectedMonster = 1;
    checkCombatLog();
    updateHealthBar();
}
function choseSkullMage(){
    let skullMageChosen = document.querySelector('.chosen-enemy');
    skullMageChosen.innerHTML = (
        '<img src="images/skullmage.png"/>'
    )
    skullMageChosen.style.display = 'inline';
    monsterChosen = true;
    selectedMonster = 2;
    checkCombatLog();
    updateHealthBar();
}
function choseMutantShark(){
    let mutantSharkChosen = document.querySelector('.chosen-enemy');
    mutantSharkChosen.innerHTML = (
        '<img src="images/mutantshark.png"/>'
    )
    mutantSharkChosen.style.display = 'inline';
    monsterChosen = true;
    selectedMonster = 3;
    checkCombatLog();
    updateHealthBar();
}
let nagaSelected = document.querySelector('.naga-button');
nagaSelected.addEventListener('click', choseNaga);
let skullMageSelected = document.querySelector('.skullmage-button');
skullMageSelected.addEventListener('click', choseSkullMage);
let mutantSharkSelected = document.querySelector('.mutantshark-button');
mutantSharkSelected.addEventListener('click', choseMutantShark);

//trazer o log
function checkCombatLog(){
    if (heroChosen && monsterChosen){
        combatLog()
    }
}
function combatLog(){
        let logShow = document.querySelector('.battle-log');
        logShow.style.display = 'inline';
        let attackButton = document.querySelector('.on-attack');
        attackButton.style.display = 'inline';
        let heroLifeBar = document.querySelector('.health-bar');
        heroLifeBar.style.display = 'inline';
        let monsterLifeBar = document.querySelector('.health-monster');
        monsterLifeBar.style.display = 'inline';
    
}

//FEATURES DO SISTEMA
//rolador de dados
function rolarDados(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//fator de ataque e de defesa.

let attackFactor = (Math.random() * 2).toFixed(2);
let defensefactor = (Math.random() * 2).toFixed(2);


//FEATURES DAS CLASSES
//Marine - ignore half armor
function ignoreArmor(){
    monster.defense = monster.defense / 2
}

//Magician - double damage chance

function doubleDamage(){
    rolarDados(1, 10)
    if (rolarDados <=3){
        
    }
}
// warrior - second wind

function returnLife(){
    if (hero.life < (hero.life * 0.2)){
        hero.life = hero.life + (hero.life * (Math.random()*2))
    }

}

//O heroi selecionado (ideia: fazer um switch)

function updateHealthBar() {
    switch(selectedHero){
    case 1: 
    document.querySelector('.health-now-hero').style.width = `${(marineCharacter.life * 100) / marineCharacter.maxLife}%`
    document.querySelector('.numbered-life').innerHTML = `${marineCharacter.life} / ${marineCharacter.maxLife}`
    hero.life = marineCharacter.life;
    hero.maxLife = marineCharacter.maxLife;
    hero.attack = marineCharacter.attack;
    hero.defense = marineCharacter.defense;
    ignoreArmor();
    break;

    case 2:
        document.querySelector('.health-now-hero').style.width = `${(magicianCharacter.life * 100) / magicianCharacter.maxLife}%`;   
        document.querySelector('.numbered-life').innerHTML = `${magicianCharacter.life} / ${magicianCharacter.maxLife}`
        hero.life = magicianCharacter.life;
        hero.maxLife = magicianCharacter.maxLife;
        hero.attack = magicianCharacter.attack;
        hero.defense = magicianCharacter.defense;
        break;
    case 3:
        document.querySelector('.health-now-hero').style.width = `${(warriorCharacter.life * 100) / warriorCharacter.maxLife}%`;
        document.querySelector('.numbered-life').innerHTML = `${warriorCharacter.life} / ${warriorCharacter.maxLife}`
        hero.life = warriorCharacter.life;
        hero.maxLife = warriorCharacter.maxLife;
        hero.attack = warriorCharacter.attack;
        hero.defense = warriorCharacter.defense;
        break;
    
}
    switch(selectedMonster){
        case 1:
            document.querySelector('.health-now-monster').style.width = `${(nagaCharacter.life * 100) / nagaCharacter.maxLife}%`;
            document.querySelector('.monster-choice .numbered-life').innerHTML = `${nagaCharacter.life}/ ${nagaCharacter.maxLife}`
            monster.life = nagaCharacter.life;
            monster.maxLife = nagaCharacter.maxLife;
            monster.attack = nagaCharacter.attack;
            monster.defense = nagaCharacter.defense;
   
            break;
    case 2:
        document.querySelector('.health-now-monster').style.width = `${(skullMageCharacter.life * 100) / skullMageCharacter.maxLife}%`;   
        document.querySelector('.monster-choice .numbered-life').innerHTML = `${skullMageCharacter.life} / ${skullMageCharacter.maxLife}`
        monster.life = skullMageCharacter.life;
        monster.maxLife = skullMageCharacter.maxLife;
        monster.attack = skullMageCharacter.attack;
        monster.defense = skullMageCharacter.defense;
       
        break;
    case 3:
        document.querySelector('.health-now-monster').style.width = `${(mutantSharkCharacter.life * 100) / mutantSharkCharacter.maxLife}%`;
        document.querySelector('.monster-choice .numbered-life').innerHTML = `${mutantSharkCharacter.life} / ${mutantSharkCharacter.maxLife}`
        monster.life = mutantSharkCharacter.life;
        monster.maxLife = mutantSharkCharacter.maxLife;
        monster.attack = mutantSharkCharacter.attack;
        monster.defense = mutantSharkCharacter.defense;
       
        break;
    }

}



