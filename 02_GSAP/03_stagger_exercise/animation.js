
const columns = 20
const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
const boxSize = screenWidth / columns
const rows = screenHeight / boxSize
const boxNumber = columns * rows


for (let i = 0; i < boxNumber; i++) {
  const box = document.createElement('div')
  box.classList.add('box')
  box.setAttribute('style', `width:${boxSize}px; height: ${boxSize}px;`)
  document.body.appendChild(box)
}


