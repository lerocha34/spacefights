



let heroChosen = false;
let monsterChosen = false;
var selectedHero = 1;
var selectedMonster = 1;
var gameSituation = 1;
let heroDamage = 0;


//seleção de herois
function choseMarine() {
    let marineChosen = document.querySelector('.chosen-hero');


    marineChosen.innerHTML = (
        '<img src="images/marine.png"/>'
    );

    /* marineChosen.innerHTML += (
     '<button class="hero-attack">Atacar</button>'
     );*/
    marineChosen.style.display = 'inline';
    heroChosen = true;
    selectedHero = 1;
    checkCombatLog();
    choseHeroStats();
    updateHeroLife();
   



}

function choseMagician() {
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
    choseHeroStats();
    updateHeroLife();
   



}

function choseWarrior() {
    let warriorChosen = document.querySelector('.chosen-hero');

    warriorChosen.innerHTML = (
        '<img src="images/warrior.png"/>'
    );
    warriorChosen.style.display = 'inline';
    heroChosen = true;
    selectedHero = 3;
    checkCombatLog();
    choseHeroStats();
    updateHeroLife();
   

        

}

let marineSelected = document.querySelector('.marine-button');
marineSelected.addEventListener('click', choseMarine);
let marineSelectedMobile = document.querySelector('.marine-mobile-button');
marineSelectedMobile.addEventListener('click', choseMarine);

let magicianSelected = document.querySelector('.magician-button');
magicianSelected.addEventListener('click', choseMagician);
let magicianSelectedMobile = document.querySelector('.magician-mobile-button');
magicianSelectedMobile.addEventListener('click', choseMagician);

let warriorSelected = document.querySelector('.warrior-button');
warriorSelected.addEventListener('click', choseWarrior);
let warriorSelectedMobile = document.querySelector('.warrior-mobile-button');
warriorSelectedMobile.addEventListener('click', choseWarrior);


//seleção de monstros
function choseNaga() {
    let nagaChosen = document.querySelector('.chosen-enemy');
    nagaChosen.innerHTML = (
        '<img src="images/naga.png"/>'
    )
    nagaChosen.style.display = 'inline';
    monsterChosen = true;
    selectedMonster = 1;
    checkCombatLog();
    choseHeroStats();
    updateHeroLife();
   
    
}
function choseSkullMage() {
    let skullMageChosen = document.querySelector('.chosen-enemy');
    skullMageChosen.innerHTML = (
        '<img src="images/skullmage.png"/>'
    )
    skullMageChosen.style.display = 'inline';
    monsterChosen = true;
    selectedMonster = 2;
    checkCombatLog();
    choseHeroStats();
    updateHeroLife();
   
}
function choseMutantShark() {
    let mutantSharkChosen = document.querySelector('.chosen-enemy');
    mutantSharkChosen.innerHTML = (
        '<img src="images/mutantshark.png"/>'
    )
    mutantSharkChosen.style.display = 'inline';
    monsterChosen = true;
    selectedMonster = 3;
    checkCombatLog();
    choseHeroStats();
    updateHeroLife();
   
}
let nagaSelected = document.querySelector('.naga-button');
nagaSelected.addEventListener('click', choseNaga);
let nagaSelectedMobile = document.querySelector('.naga-mobile-button');
nagaSelectedMobile.addEventListener('click', choseNaga);

let skullMageSelected = document.querySelector('.skullmage-button');
skullMageSelected.addEventListener('click', choseSkullMage);
let skullMagelectedMobile = document.querySelector('.skullmage-mobile-button');
skullMageSelectedMobile.addEventListener('click', choseSkullMage);

let mutantSharkSelected = document.querySelector('.mutantshark-button');
mutantSharkSelected.addEventListener('click', choseMutantShark);
let mutantSharkSelectedMobile = document.querySelector('.mutantshark-mobile-button');
mutantSharkSelectedMobile.addEventListener('click', choseMutantShark);

//trazer o log
function checkCombatLog() {
    if (heroChosen && monsterChosen) {
        combatLog()
    }
}

function scrollToBottomLog() {
    let logContainer = document.querySelector('.battle-log');
    logContainer.scrollTop = logContainer.scrollHeight;
}
    

function combatLog() {
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
function rolarDados(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//fator de ataque e de defesa.

let attackFactor = (Math.random() * 2).toFixed(2);

let defensefactor = (Math.random() * 2).toFixed(2);


//sistema de ataque


function attacking() {
    let randomFactor = (Math.random() * 2).toFixed(2);
    let heroAttackDamage = hero.attack * randomFactor;
    let monsterAttackDamage = monster.attack * randomFactor;
    let heroDefense = hero.defense * randomFactor;
    let monsterDefense = monster.defense * randomFactor;
    let heroDamage = heroAttackDamage - monsterDefense;
    let monsterDamage = monsterAttackDamage - heroDefense;
    let updateLog = document.querySelector('.battle-log');
    
    
    if (heroDamage <= 0 && gameSituation == 1) {
        updateLog.innerHTML += `<li>${monster.name} defendeu</li>`
    } else if (heroDamage > 0 && gameSituation == 1) {
        monster.life = monster.life - heroDamage;
        updateLog.innerHTML += `<li>${hero.name} deu ${heroDamage.toFixed(1)} de dano em ${monster.name}.</li>`
        updateHeroLife();
        scrollToBottomLog();
        
        
    }

    if (monsterDamage <= 0 && gameSituation == 1) {
        
        updateLog.innerHTML += `<li>${hero.name} defendeu</li>`
    } else if (monsterDamage > 0 && gameSituation == 1) {
        hero.life = hero.life - monsterDamage;
        updateLog.innerHTML += `<li>${monster.name} deu ${monsterDamage.toFixed(1)} de dano em ${hero.name}.</li>`
        updateHeroLife();
        scrollToBottomLog();
       
    }

    if (hero.life <= 0){
        updateLog.innerHTML += `<li>${hero.name} está morto</li>`;
        gameSituation = 2;
    } else if (monster.life <= 0){
        updateLog.innerHTML += `<li>${monster.name} está morto </li>`;
        gameSituation = 2;
    }
}

document.querySelector('.on-attack').addEventListener('click', attacking)




//O heroi selecionado 
function choseHeroStats() {
    switch (selectedHero) {
        case 1:
            
            hero.name = 'Marine'
            hero.life = marineCharacter.life;
            hero.maxLife = marineCharacter.maxLife;
            hero.attack = marineCharacter.attack;
            hero.defense = marineCharacter.defense;
            
            break;

        case 2:
            
            hero.name = 'Magician'
            hero.life = magicianCharacter.life;
            hero.maxLife = magicianCharacter.maxLife;
            hero.attack = magicianCharacter.attack;
            hero.defense = magicianCharacter.defense;
            
            break;
        case 3:
           
            hero.name = 'Warrior'
            hero.life = warriorCharacter.life;
            hero.maxLife = warriorCharacter.maxLife;
            hero.attack = warriorCharacter.attack;
            hero.defense = warriorCharacter.defense;
            
            break;

    }
    switch (selectedMonster) {
        case 1:
            
            monster.name = 'Naga'
            monster.life = nagaCharacter.life;
            monster.maxLife = nagaCharacter.maxLife;
            monster.attack = nagaCharacter.attack;
            monster.defense = nagaCharacter.defense;
            
            break;
        case 2:
            
            monster.name = 'Skull Mage'
            monster.life = skullMageCharacter.life;
            monster.maxLife = skullMageCharacter.maxLife;
            monster.attack = skullMageCharacter.attack;
            monster.defense = skullMageCharacter.defense;
            
            
            break;
        case 3:
            
            monster.name = 'Mutant Shark'
            monster.life = mutantSharkCharacter.life;
            monster.maxLife = mutantSharkCharacter.maxLife;
            monster.attack = mutantSharkCharacter.attack;
            monster.defense = mutantSharkCharacter.defense;
            
    
            break;
    }


}

function updateHeroLife(){
  document.querySelector('.health-now-hero').style.width = `${(hero.life * 100) / hero.maxLife}%`
document.querySelector('.health-now-monster').style.width = `${(monster.life * 100) / monster.maxLife}%`
}


