const playerAvatar = document.getElementById('player1');
const enemyAvatar = document.getElementById('enemy');
const chooseAttack = document.getElementById('choose-attack');
// const moveAlert = document.getElementById('move-alert');
const userAlert = document.getElementById('user-alert');
const enemyAlert = document.getElementById('enemy-alert');

const battleMove = () => {
  headerVisible();
  playerMove();
  setTimeout(function() {enemyMove()}, 2000);
  resetButton();
}

const headerVisible = () => {
  chooseAttack.classList.toggle('hide');
  setTimeout(function() {chooseAttack.classList.toggle('hide')}, 4000);
}

const playerMove = () => {
  userAlertToggle();
  enemyAvatar.classList.remove('animate__headShake');
  setTimeout(function() {enemyAvatar.classList.toggle("animate__headShake")}, 1);
}

const userAlertToggle = () => {
  userAlert.classList.toggle('hide');
  userAlert.classList.toggle('animate__zoomIn');
  setTimeout(function() {resetUserAlert()}, 2000);
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
  setTimeout(function() {resetEnemyAlert()}, 2000);
}

const resetEnemyAlert = () => {
  enemyAlert.classList.toggle('hide');
  enemyAlert.classList.toggle('animate__zoomIn');
}

const resetButton = () => {
  const attackButton = document.querySelectorAll('button');
  attackButton.forEach(button => button.disabled = true);
  attackButton.forEach(button => button.style.opacity = .5);
  setTimeout(function() {attackButton.forEach(button => button.disabled = false)}, 4000);
  setTimeout(function() {attackButton.forEach(button => button.style.opacity = 1)}, 4000);
}


battleMove();