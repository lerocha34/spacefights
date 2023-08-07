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

//rolador de dados
function rolarDados(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//O heroi selecionado (ideia: fazer um switch)

switch(heroChosen){
    case 1:
        document.querySelector('.hero-bar').style.width = '(this.life * 100) / this.maxLife'
        console.log(heroChosen);
        break;
    case 2:
        
}

