const stats = document.getElementById('stats').value;
const character = JSON.parse(stats);
let characterHP = character.characterHP;
const characterDam = character.characterDam;
const charImage = character.charImage;
let enemyHP = character.enemyHP;
const enemyDam = character.enemyDam;

const saveFight = (characterHP, charDam, enemyHP, enemyDamDone) => {
  // create new object for local storage
  const battleSave = {
    id: character.id,
    name: character.name,
    characterMaxHP: character.characterMaxHP,
    characterDam: character.characterDam,
    charImage: character.charImage,
    characterHP: characterHP,
    charDamDone: charDam,
    enemyHP: enemyHP,
    enemyDamDone: enemyDamDone,
    enemyName: character.enemyName,
    enemyImage: character.enemyImage,
    enemyDam: character.enemyDam,
    enemyMaxHP: character.enemyMaxHP,
  };
  localStorage.setItem('currentBattle', JSON.stringify(battleSave));

  document.location.replace('/battle2');
}

const attackOne = async (event) => {
  event.preventDefault();

  switch (charImage) {
    case '/images/mage.jpg':
      var charClass = 'Mage';
      var atkMult = 1;
      break;
    case '/images/beast.jpeg':
      var charClass = 'Barbarian';
      var atkMult = 1;
      break;
    case '/images/hunter.jpg':
      var charClass = 'Hunter';
      var atkMult = 1.2;
      break;
  };

  // character attack
  if (Math.random() < 0.9) {
    var charDam = (characterDam * atkMult);
  } else {
    var charDam = 0;
  };
  enemyHP -= charDam;

  // enemy attack
  if (Math.random() < 0.5) {
    var enemyDamDone = enemyDam;
  } else {
    var enemyDamDone = 0;
  };
  characterHP -= enemyDamDone;

  saveFight(characterHP, charDam, enemyHP, enemyDamDone);
};

const attackTwo = async (event) => {
  await event.preventDefault();

  switch (charImage) {
    case '/images/mage.jpg':
      var charClass = 'Mage';
      var atkMult = 1;
      break;
    case '/images/beast.jpeg':
      var charClass = 'Barbarian';
      var atkMult = 1.2;
      break;
    case '/images/hunter.jpg':
      var charClass = 'Hunter';
      var atkMult = 1;
      break;
  };

  // character attack
  if (charClass !== 'Mage') {
    if (Math.random() < 0.5) {
      var charDam = (characterDam * atkMult);
    } else {
      var charDam = 0;
    };
    enemyHP -= charDam;
  } else {
    characterHP += 25
  };

  // enemy attack
  if (Math.random() < 0.5) {
    var enemyDamDone = enemyDam;
  } else {
    var enemyDamDone = 0;
  };
  characterHP -= enemyDamDone;

  saveFight(characterHP, charDam, enemyHP, enemyDamDone);
};

const attackThree = async (event) => {
  await event.preventDefault();

  switch (charImage) {
    case '/images/mage.jpg':
      var charClass = 'Mage';
      var atkMult = 1.2;
      break;
    case '/images/beast.jpeg':
      var charClass = 'Barbarian';
      var atkMult = 1;
      break;
    case '/images/hunter.jpg':
      var charClass = 'Hunter';
      var atkMult = 1;
      break;
  };

  // character attack
  if (Math.random() < 0.9) {
    var charDam = (characterDam * atkMult);
  } else {
    var charDam = 0;
  };
  enemyHP -= charDam;

  // enemy attack
  if (Math.random() < 0.5) {
    var enemyDamDone = enemyDam;
  } else {
    var enemyDamDone = 0;
  };
  characterHP -= enemyDamDone;

  saveFight(characterHP, charDam, enemyHP, enemyDamDone);
};

document.getElementById('attack1').addEventListener('click', attackOne);
document.getElementById('attack2').addEventListener('click', attackTwo);
document.getElementById('attack3').addEventListener('click', attackThree);