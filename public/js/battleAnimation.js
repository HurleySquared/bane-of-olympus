const playerAvatar = document.getElementById('player1');
const enemyAvatar = document.getElementById('enemy');
const chooseAttack = document.getElementById('choose-attack');
const userAlert = document.getElementById('user-alert');
const enemyAlert = document.getElementById('enemy-alert');
const charAttack1 = document.getElementById('attack1');
const charAttack2 = document.getElementById('attack2');
const charAttack3 = document.getElementById('attack3');
const characterImage = character.charImage;

const setAttacks = () => {
  
  switch (characterImage) {
    case '/images/mage.png':
      charAttack1.innerHTML = "Water Jet";
      charAttack2.innerHTML = "Prayer of Healing";
      charAttack3.innerHTML = "Fireball";
      break;
    case '/images/beast.png':
      charAttack1.innerHTML = "Slash";
      charAttack2.innerHTML = "Reckless Swing";
      charAttack3.innerHTML = "Throw Sand";
      break;
    case '/images/hunter.png':
      charAttack1.innerHTML = "Water Jet";
      charAttack2.innerHTML = "Prayer of Healing";
      charAttack3.innerHTML = "Trick Shot";
      break;
  };
};

const battleMove = () => {
  headerVisible();
  playerMove();
  setTimeout(function() {enemyMove()}, 3500);
  resetButton();
}

const headerVisible = () => {
  chooseAttack.classList.toggle('hidden');
  setTimeout(function() {chooseAttack.classList.toggle('hidden')}, 7000);
}

const playerMove = () => {
  userAlertToggle();
  enemyAvatar.classList.remove('animate__headShake');
  setTimeout(function() {enemyAvatar.classList.toggle("animate__headShake")}, 1);
}

const userAlertToggle = () => {
  userAlert.classList.toggle('hide');
  userAlert.classList.toggle('animate__zoomIn');
  setTimeout(function() {resetUserAlert()}, 3500);
}

const resetUserAlert = () => {
  userAlert.classList.toggle('animate__zoomIn');
  userAlert.classList.toggle('hide');
}

const enemyMove = () => {
  enemyAlertToggle();
  playerAvatar.classList.remove('animate__headShake');
  setTimeout(function() {playerAvatar.classList.toggle("animate__headShake")}, 1);
}

const enemyAlertToggle = () => {
  enemyAlert.classList.toggle('hide');
  enemyAlert.classList.toggle('animate__zoomIn');
  setTimeout(function() {resetEnemyAlert()}, 3500);
}

const resetEnemyAlert = () => {
  enemyAlert.classList.toggle('hide');
  enemyAlert.classList.toggle('animate__zoomIn');
}

const resetButton = () => {
  document.getElementsByTagName('button').disabled = true;
  setTimeout(function() {document.getElementsByTagName('button').disabled = false}, 7000);
}

// battleMove();
setAttacks();