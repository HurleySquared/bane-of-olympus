const charAttack1 = document.getElementById("attack1");
const charAttack2 = document.getElementById("attack2");
const charAttack3 = document.getElementById("attack3");
const charAttack4 = document.getElementById("attack4");
const characterImage = document
  .getElementById("player-image")
  .getAttribute("src");

const setAttacks = () => {
  switch (characterImage) {
    case "/images/mage.jpg":
      charAttack1.innerHTML = "Water Jet";
      charAttack2.innerHTML = "Prayer of Healing";
      charAttack3.innerHTML = "Fireball";
      charAttack4.innerHTML = "Stone Barrier";
      break;
    case "/images/beast.jpeg":
      charAttack1.innerHTML = "Slash";
      charAttack2.innerHTML = "Reckless Swing";
      charAttack3.innerHTML = "Throw Sand";
      charAttack4.innerHTML = "Shield Bash";
      break;
    case "/images/hunter.jpg":
      charAttack1.innerHTML = "Quick Shot";
      charAttack2.innerHTML = "Charged Arrow";
      charAttack3.innerHTML = "Trick Shot";
      charAttack4.innerHTML = "Stun Arrow";
      break;
  }
};

setAttacks();
