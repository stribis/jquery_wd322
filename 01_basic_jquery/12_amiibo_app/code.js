// On page load 
// Get all characters from api

getData () 
getAmiibos()

async function getData () {

  const response = await fetch('https://www.amiiboapi.com/api/character')
  const data = await response.json()

  console.log(data)
  writeCharacters(data)
  
}
function writeCharacters (characters) {
  let onlyNames = []
  characters.amiibo.forEach(character => {
    onlyNames.push(character.name)
  })
  const filteredCharacters = [...new Set(onlyNames)]
  console.log(filteredCharacters)
  filteredCharacters.forEach( character => {
    const li = document.createElement('li')
    li.innerText = character
    document.querySelector('.characters').appendChild(li)
  })
}

function getAmiibos () {

  document.querySelector('.characters').addEventListener('click', async (e) => {
    console.log('character')
    const character = e.target.innerText
    
    const url = `https://www.amiiboapi.com/api/amiibo/?character=${character}`

    const response = await fetch(url)
    const data = await response.json()

    console.log(data.amiibo[0].image)


    document.querySelector('.amiibo-container').innerHTML = ''
    data.amiibo.forEach( figure  => {
      console.log(figure)
      const amiibo = document.createElement('div')
      const template = `
      <div><img src="${figure.image}" alt="Figure of ${figure.name}"></div>
      <ul>
        <li><span>Name:</span> ${figure.name}</li>
        <li><span>Game Series:</span> ${figure.gameSeries}</li>
        <li><span>Amiibo Series:</span> ${figure.amiiboSeries}</li>
        <li><span>Type:</span> ${figure.type}</li>
      </ul>
      `
      amiibo.innerHTML = template
      document.querySelector('.amiibo-container').append(amiibo)
    })


    document.querySelector('.amiibo-container').classList.remove('hidden')
    document.querySelector('.amiibo-container').innerHTML += `<div class="close">X</div>`
  })

}

window.addEventListener('click', e => {
  if(e.target.classList.contains('close')){
    document.querySelector('.amiibo-container').classList.add('hidden')
  }
})