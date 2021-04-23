console.log('Praise Cage from client side js')
let timeSpan = document.querySelector('#time')

function myTimer() {
  let date = new Date()
  let time = date.toLocaleTimeString()
  timeSpan.textContent = time
}

let updateTime = setInterval(myTimer, 1000)