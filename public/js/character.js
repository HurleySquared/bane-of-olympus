const charName = document.querySelector('#charName');
const charClass = document.querySelector('#character-class');

const newCharCreate = async (event) => {
  event.preventDefault();
  let charImage;
  if (charClass.value == 'Beast') { charImage = '/images/beast.jpeg' };
  if (charClass.value == 'Hunter') { charImage = '/images/hunter.jpg' };
  if (charClass.value == 'Mage') { charImage = '/images/mage.jpg' };
  const charData = JSON.stringify({ "char": charName.value, "charImage": charImage })
  if (charName && charClass) {
    const response = await fetch('/api/characters/', {
      method: 'POST',
      body: charData,
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/battle');
    } else {
      alert('failed to post');
    }
  }
}

document.querySelector('#charButton').addEventListener('click', newCharCreate);