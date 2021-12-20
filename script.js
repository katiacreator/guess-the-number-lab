const grid = document.querySelector('#grid-container')
// console.log(grid)
const colors = ['#fcba03', '#fc4e03', '#03fc90','#5792eb', '#00ffff', '#5c57eb', '#eb57cd', '#96097a', '#fc68dc', '#5efc58', '#fc8758', '#e04407', '#fcc1a9', '#d7a9fc', '#de2a39', '#2ac0de', '#0702fa', '#bc62fc', '#43b3ae', '#ff0000', '#ff4040', '#ba55d3', '#ff00ff', 'blue', 'turquoise', 'purple', 'peru', 'yellow']
const SQUARES = 54
// console.log(SQUARES)
let number;


for(let i = 0; i < SQUARES; i++){
  const square = document.createElement('div')
  // console.log(square)
  square.classList.add('square')
  number = Math.floor(Math.random() * SQUARES + 1)
  // console.log(number)
  square.textContent = number

  // square.addEventListener('click', () => setColor(square))
  // square.addEventListener('click', () => removeColor(square))
  square.addEventListener('mouseout', () => setColor(square))
  square.addEventListener('mouseover', () => removeColor(square))
  grid.appendChild(square)
}

function setColor(element){
  const color = getRandomColor()
  // console.log(color)
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
  element.style.background = '#1d1d1d'
  element.style.color = '#1d1d1d'

}

function getRandomColor(){
  return colors[Math.floor(Math.random() * colors.length)]
}