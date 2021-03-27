const charName = document.querySelector('#charName').value.trim();
const charClass = document.querySelector('#character-class').value.trim();

const newCharCreate = async (event) => {
  event.preventDefault();
  console.log(charName, charClass);
  if (charClass == 'Beast') { let charImage = '/images/beast.png' };
  if (charClass == 'Hunter') { let charImage = '/images/hunter.png' };
  if (charClass == 'Mage') { let charImage = '/images/mage.png' };
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