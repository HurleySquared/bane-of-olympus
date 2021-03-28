const stats = document.getElementById('stats').value

const attackOne = async (event) => {
  event.preventDefault();
  const character = JSON.parse(stats);
  var characterHP = character.characterHP;
  var characterDam = character.characterDam;
  var charImage = character.charImage;

  switch (charImage) {
    case '/images/mage.png':
      var charClass = 'Mage';
      var atkMult = 1;
      break;
    case '/images/beast.png':
      var charClass = 'Barbarian';
      var atkMult = 1;
      break;
    case '/images/hunter.png':
      var charClass = 'Hunter';
      var atkMult = 1.2;
      break;
  };
  // const enemy = await fetch('api/enemies/random');
  var enemyHP = character.enemyHP;
  var enemyDam = character.enemyDam;

  // character attack
  if (Math.floor(Math.random()) < 0.9) {
    var charDam = (characterDam * atkMult);
  } else {
    var charDam = 0;
  };
  enemyHP -= charDam;
  
  // enemy attack
  if (Math.floor(Math.random()) < 0.9) {
    var enemyDamDone = enemyDam;
  } else {
    var enemyDamDone = 0;
  };
  characterHP -= enemyDamDone;

  // create new object for local storage
  const battleSave = {
    name: character.character_name,
    characterHP: characterHP,
    characterDam: characterDam,
    charImage: charImage,
    charDamDone: charDam,
    enemyName: enemy.character_name,
    enemyImage: enemy.image,
    enemyHP: enemyHP,
    enemyDam: enemyDam,
    enemyDamDone: enemyDamDone,
  };
  localStorage.setItem('currentBattle', JSON.stringify(battleSave));

  
};























document.getElementById('attack1').addEventListener('click', attackOne);
// document.getElementById('attack2').addEventListener('click', attackTwo);
// document.getElementById('attack2').addEventListener('click', attackThree);