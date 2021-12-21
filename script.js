const grid = document.querySelector('#grid-container')
// console.log(grid)
const colors = ['#FF6633', 'purple','#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', 'peru','#999966', '#99FF99', '#B34D4D','aliceblue',
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', 'peru', '#33FFCC',
 '#fc4e03', 'blue', 'purple', 'turquoise','yellow', '#03fc90','#5792eb', '#E6B333', '#3366E6', '#00ffff', '#5c57eb', '#eb57cd', '#96097a', '#fc68dc', 'peru', 'yellow','#5efc58', '#fc8758', '#e04407', '#fcc1a9', 'purple', '#d7a9fc', '#de2a39', '#2ac0de', 'orange', '#bc62fc', '#43b3ae', '#ff0000', '#ff4040', '#ba55d3', '#ff00ff', 'blue', 'turquoise', 'peru', 'purple', '#d7a9fc','purple', '#d7a9fc']
const SQUARES = 50
console.log(SQUARES)
let number;

for(let i = 0; i < SQUARES; i++){
  const square = document.createElement('div')
  // console.log(square)
  square.classList.add('square')
  number = Math.floor(Math.random() * SQUARES + 1)
  // console.log(number)
  square.textContent = number

  let color = getRandomColor()
  console.log(color)

  square.style.background = 'var(--primary)'
  square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
  square.style.color = 'var(--tertiary)'

  grid.appendChild(square)
}


function getRandomColor(){
  return colors[Math.floor(Math.random() * colors.length)]
}