const charName = document.querySelector('#charName');
const charClass = document.querySelector('#character-class');

const newCharCreate = async (event) => {
  event.preventDefault();
  console.log(charName.value);
  console.log(charClass.value);
  if (charClass.value == 'Beast') { let charImage = '/images/beast.png' };
  if (charClass.value == 'Hunter') { let charImage = '/images/hunter.png' };
  if (charClass.value == 'Mage') { let charImage = '/images/mage.png' };
  if (charName && charClass) {
    const response = await fetch('/api/user/char', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log(response.game.id)

  }
}

document.querySelector('#charButton').addEventListener('click', newCharCreate);