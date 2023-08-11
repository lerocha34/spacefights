



let heroChosen = false;
let monsterChosen = false;
var selectedHero = 1;
var selectedMonster = 1;


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
    updateHealthBar();
    ignoreArmor();


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
    updateHealthBar();
    doubleDamage();


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
    updateHealthBar();
    secondWind();
        

}

let marineSelected = document.querySelector('.marine-button');
marineSelected.addEventListener('click', choseMarine);
let magicianSelected = document.querySelector('.magician-button');
magicianSelected.addEventListener('click', choseMagician);
let warriorSelected = document.querySelector('.warrior-button');
warriorSelected.addEventListener('click', choseWarrior);


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
    updateHealthBar();
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
    updateHealthBar();
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
    updateHealthBar();
}
let nagaSelected = document.querySelector('.naga-button');
nagaSelected.addEventListener('click', choseNaga);
let skullMageSelected = document.querySelector('.skullmage-button');
skullMageSelected.addEventListener('click', choseSkullMage);
let mutantSharkSelected = document.querySelector('.mutantshark-button');
mutantSharkSelected.addEventListener('click', choseMutantShark);

//trazer o log
function checkCombatLog() {
    if (heroChosen && monsterChosen) {
        combatLog()
    }
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
    let attackFactor = (Math.random() * 2).toFixed(2);

    let defensefactor = (Math.random() * 2).toFixed(2);
    let heroAttackDamage = hero.attack * attackFactor;
    let monsterAttackDamage = monster.attack * attackFactor;
    let heroDefense = hero.defense * defensefactor;
    let monsterDefense = monster.defense * defensefactor;
    let heroDamage = heroAttackDamage - monsterDefense;
    let monsterDamage = monsterAttackDamage - heroDefense;
    let updateLog = document.querySelector('.battle-log');
    secondWind();
    
    if (heroDamage <= 0) {
        updateLog.innerHTML += `<li>${monster.name} defendeu</li>`
    } else if (heroDamage > 0) {
        monster.life = monster.life - heroDamage;
        updateLog.innerHTML += `<li>${hero.name} deu ${heroDamage.toFixed(0)} de dano em ${monster.name}, o HP total é de ${monster .life}</li>`

    }

    if (monsterDamage <= 0) {
        
        updateLog.innerHTML += `<li>${hero.name} defendeu</li>`
    } else if (monsterDamage > 0) {
        hero.life = hero.life - monsterDamage;
        updateLog.innerHTML += `<li>${monster.name} deu ${monsterDamage.toFixed(0)} de dano em ${hero.name} o hp total é de ${hero.life}</li>`
    }


}

document.querySelector('.on-attack').addEventListener('click', attacking)

//FEATURES DAS CLASSES
//Marine - ignore half armor
function ignoreArmor() {
    monster.defense = monster.defense / 2
}

//Magician - double damage chance

function doubleDamage() {
    let randomValue = rolarDados(1, 10)
    if (randomValue <= 2) {
        heroDamage = heroDamage * 2;
        combatLog.innerHTML += "Dano Duplo!"
    }
}
// warrior - second wind

function secondWind() {
    if (hero.life < (hero.maxLife * 0.20) && (selectedHero === 3)) {
        let healingPercentage = 0.10;
        let maxHealing = hero.maxLife * healingPercentage;
        let randomHealing = rolarDados(1, maxHealing);
        
        hero.life += randomHealing;
        
        updateLog.innerHTML = `<li>Você recuperou ${randomHealing.toFixed(0)} de vida.</li>`;
    }
}



//O heroi selecionado 
function updateHealthBar() {
    switch (selectedHero) {
        case 1:
            document.querySelector('.health-now-hero').style.width = `${(marineCharacter.life * 100) / marineCharacter.maxLife}%`
            document.querySelector('.numbered-life').innerHTML = `${marineCharacter.life} / ${marineCharacter.maxLife}`
            hero.name = 'Marine'
            hero.life = marineCharacter.life;
            hero.maxLife = marineCharacter.maxLife;
            hero.attack = marineCharacter.attack;
            hero.defense = marineCharacter.defense;
            ignoreArmor();
            break;

        case 2:
            document.querySelector('.health-now-hero').style.width = `${(magicianCharacter.life * 100) / magicianCharacter.maxLife}%`;
            document.querySelector('.numbered-life').innerHTML = `${magicianCharacter.life} / ${magicianCharacter.maxLife}`
            hero.name = 'Magician'
            hero.life = magicianCharacter.life;
            hero.maxLife = magicianCharacter.maxLife;
            hero.attack = magicianCharacter.attack;
            hero.defense = magicianCharacter.defense;
            doubleDamage()
            break;
        case 3:
            document.querySelector('.health-now-hero').style.width = `${(warriorCharacter.life * 100) / warriorCharacter.maxLife}%`;
            document.querySelector('.numbered-life').innerHTML = `${warriorCharacter.life} / ${warriorCharacter.maxLife}`
            hero.name = 'Warrior'
            hero.life = warriorCharacter.life;
            hero.maxLife = warriorCharacter.maxLife;
            hero.attack = warriorCharacter.attack;
            hero.defense = warriorCharacter.defense;
            secondWind()
            break;

    }
    switch (selectedMonster) {
        case 1:
            document.querySelector('.health-now-monster').style.width = `${(nagaCharacter.life * 100) / nagaCharacter.maxLife}%`;
            document.querySelector('.monster-choice .numbered-life').innerHTML = `${nagaCharacter.life}/ ${nagaCharacter.maxLife}`
            monster.name = 'Naga'
            monster.life = nagaCharacter.life;
            monster.maxLife = nagaCharacter.maxLife;
            monster.attack = nagaCharacter.attack;
            monster.defense = nagaCharacter.defense;

            break;
        case 2:
            document.querySelector('.health-now-monster').style.width = `${(skullMageCharacter.life * 100) / skullMageCharacter.maxLife}%`;
            document.querySelector('.monster-choice .numbered-life').innerHTML = `${skullMageCharacter.life} / ${skullMageCharacter.maxLife}`
            monster.name = 'Skull Mage'
            monster.life = skullMageCharacter.life;
            monster.maxLife = skullMageCharacter.maxLife;
            monster.attack = skullMageCharacter.attack;
            monster.defense = skullMageCharacter.defense;

            break;
        case 3:
            document.querySelector('.health-now-monster').style.width = `${(mutantSharkCharacter.life * 100) / mutantSharkCharacter.maxLife}%`;
            document.querySelector('.monster-choice .numbered-life').innerHTML = `${mutantSharkCharacter.life} / ${mutantSharkCharacter.maxLife}`
            monster.name = 'Mutant Shark'
            monster.life = mutantSharkCharacter.life;
            monster.maxLife = mutantSharkCharacter.maxLife;
            monster.attack = mutantSharkCharacter.attack;
            monster.defense = mutantSharkCharacter.defense;

            break;
    }

}



