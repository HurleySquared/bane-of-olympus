const stats = document.getElementById('stats');
const character = JSON.parse(localStorage.getItem('currentBattle'));


const init = () => {

  document.getElementById('charHP').text = character.characterHP;
  document.getElementById('charCard').innerHTML = `
  <h2>${character.name}</h2>
  <div class=" animate__animated" id="player1">
    <img class="player-pic" src="${character.charImage}">
  </div>
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
    document.getElementById('attackResult').innerHTML = `
      <div class="animate__animated hide" id="enemy-alert">
        <p>${character.enemyName} attacked,</p>
        <p>${character.name} lost ${character.enemyDamDone} hp</p>
      </div>
    `;
  } else {
    document.getElementById('attackResult').innerHTML = `
    <div class="animate__animated hide" id="user-alert">
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
      ${character.enemyHP}
    </div>
  `;
};

init();