const goToBattle = async (event) => {
  event.preventDefault();

  const savedGame = JSON.parse(localStorage.getItem('currentBattle'));

  if (savedGame == null) {
    document.location.replace('/battle');

  } else {
    document.location.replace('/battle2');
  }
}




document.querySelector('#card1').addEventListener('click', goToBattle);