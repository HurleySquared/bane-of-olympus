document.querySelectorAll('img').forEach(addClick);

async function addClick(item, index) {
  item.addEventListener("click", (e) => {
    char = e.target;
    const charId = char.getAttribute('id');
    console.log(charId)
    const savedGame = JSON.parse(localStorage.getItem('currentBattle'))
    if (savedGame == null) {
      document.location.replace(`/battle/${charId}`)
    } else {
      document.location.replace('/battle2')
    }
  })
}