const playerAvatar = document.getElementById('player1');
const enemyAvatar = document.getElementById('enemy');
const chooseAttack = document.getElementById('choose-attack');
const moveAlert = document.getElementById('moveAlert');

const playerMove = () => {
  playerAvatar.classList.remove('animate__headShake');
  enemyAvatar.classList.remove('animate__headShake');
  setTimeout(function() {resetMove()}, 100);
  chooseAttack.classList.toggle('hidden');
  setTimeout(function() {visible()}, 4000);
  moveAlert.classList.toggle('animate__zoomIn');
  moveAlert.classList.toggle('hidden');
  setTimeout(function() {resetAlert()}, 4000);
  document.getElementById('attack1').disabled = true;
  setTimeout(function() {resetButton()}, 4000);
}

const resetMove = () => {
  playerAvatar.classList.toggle("animate__headShake");
  enemyAvatar.classList.toggle("animate__headShake");
}

const resetAlert = () => {
  moveAlert.classList.toggle('animate__zoomIn');
  moveAlert.classList.toggle('hidden');
}

const visible = () => {
  chooseAttack.classList.toggle('hidden');
}

const resetButton = () => {
  document.getElementById('attack1').disabled = false;
}

document.getElementById('attack1').addEventListener('click', playerMove)