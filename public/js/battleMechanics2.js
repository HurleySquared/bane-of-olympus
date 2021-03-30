const stats = document.getElementById('stats');
const character = JSON.parse(localStorage.getItem('currentBattle'));

var characterHP = character.characterHP;
const characterDam = character.characterDam;
const charImage = character.charImage;
var enemyHP = character.enemyHP;
const enemyDam = character.enemyDam;
const charID = character.id;
const score = (characterHP / character.characterMaxHP) * 200;

const resolveAttacks = async () => {
  if (characterHP <= 0) {
    const lost = await fetch('/api/characters/', {
      method: 'DELETE',
      body: JSON.stringify({ "id": charID }),
      headers: { 'Content-Type': 'application/json' },
    })
    if (lost.ok) {
      await localStorage.clear();
      await document.location.replace('/defeat')
    } else {
    }
  }
  if (enemyHP <= 0) {
    const won = await fetch('/api/game/id', {
      method: 'PUT',
      body: JSON.stringify({ "score": score }),
      headers: { 'Content-Type': 'application/json' },
    })
    if (won.ok) {
      await localStorage.clear();
      await document.location.replace('/victory')
    } else {
    }
  }
};

const saveFight = async (newCharacterHP, charDam, newEnemyHP, enemyDamDone) => {

  // create new object for local storage
  const battleSave = {
    id: character.id,
    name: character.name,
    characterMaxHP: character.characterMaxHP,
    characterDam: character.characterDam,
    charImage: character.charImage,
    characterHP: newCharacterHP,
    charDamDone: charDam,
    enemyHP: newEnemyHP,
    enemyDamDone: enemyDamDone,
    enemyName: character.enemyName,
    enemyImage: character.enemyImage,
    enemyDam: character.enemyDam,
    enemyMaxHP: character.enemyMaxHP,
  };
  await localStorage.setItem('currentBattle', JSON.stringify(battleSave));

  document.location.reload();
};

const attackOne = async (event) => {
  await event.preventDefault();

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
  if (Math.random() < 0.99) {
    var enemyDamDone = enemyDam + 90;
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
    var charDam = ((characterDam + 20) * atkMult);
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

const attackFour = async (event) => {
  await event.preventDefault();

  switch (charImage) {
    case '/images/mage.jpg':
      var charClass = 'Mage';
      var atkMult = 0.2;
      break;
    case '/images/beast.jpeg':
      var charClass = 'Barbarian';
      var atkMult = 0.5;
      break;
    case '/images/hunter.jpg':
      var charClass = 'Hunter';
      var atkMult = 0.6;
      break;
  };

  // character attack
  if (Math.random() < 0.99) {
    var charDam = (characterDam * atkMult);
  } else {
    var charDam = 0;
  };
  enemyHP -= charDam;

  // enemy attack
  if (Math.random() < 0.1) {
    var enemyDamDone = enemyDam;
  } else {
    var enemyDamDone = 0;
  };
  characterHP -= enemyDamDone;

  saveFight(characterHP, charDam, enemyHP, enemyDamDone);
};

// runs on page load, 
const init = () => {

  // document.getElementById('charHP').innerHTML = character.characterHP;
  document.getElementById('charCard').innerHTML = `
  <h2>${character.name}</h2>
  <div class=" animate__animated" id="player1">
    <img class="player-pic" id="player-image" src="${character.charImage}">
  </div>
  `;
  document.getElementById('playerHealth').innerHTML = `
  <p> Health:
    <progress id="charHealth" value="${character.characterHP}" max="${character.characterMaxHP}"></progress>
  </p>
  `;

  // Write depending on if character hit or missed
  if (character.charDamDone) {
    document.getElementById('attackResult').innerHTML = `
    <div class="animate__animated hide" id="user-alert">
      <p>${character.name} attacked,</p>
      <p>${character.enemyName} lost ${character.charDamDone} hp</p>
    </div>`;
  } else {
    document.getElementById('attackResult').innerHTML = `
    <div class="animate__animated hide" id="user-alert">
      <p>${character.name} missed!</p>
    </div>
    `
  };

  // Write depending on if enemy hit or missed
  if (character.enemyDamDone) {
    document.getElementById('attackResult').innerHTML += `
      <div class="animate__animated hide" id="enemy-alert">
        <p>${character.enemyName} attacked,</p>
        <p>${character.name} lost ${character.enemyDamDone} hp</p>
      </div>
    `;
  } else {
    document.getElementById('attackResult').innerHTML += `
    <div class="animate__animated hide" id="enemy-alert">
      <p>${character.enemyName} missed!</p>
    </div>
    `
  };

  document.getElementById('boss').innerHTML = `
    <div>
      <h2>${character.enemyName}</h2>
      <div class=" animate__animated" id="enemy">
        <img class="player-pic" src="${character.enemyImage}">
      </div>
    </div>
    <div id="enemyHP">
      <p> Health:
        <progress id="enemyHealth" value="${character.enemyHP}" max="${character.enemyMaxHP}"></progress>
      </p>
    </div>
  `;
  setTimeout(function () { resolveAttacks() }, 4000);
};

init();

document.getElementById('attack1').addEventListener('click', attackOne);
document.getElementById('attack2').addEventListener('click', attackTwo);
document.getElementById('attack3').addEventListener('click', attackThree);
document.getElementById('attack4').addEventListener('click', attackFour);