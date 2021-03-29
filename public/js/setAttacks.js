const charAttack1 = document.getElementById('attack1');
const charAttack2 = document.getElementById('attack2');
const charAttack3 = document.getElementById('attack3');
const characterImage = document.getElementById('player-image').getAttribute("src");

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

setAttacks();