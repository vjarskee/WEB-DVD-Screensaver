import './style.css'

const colors = ['white', 'red', 'purple', 'fuchsia', 'green', 'lime', 'yellow', '	blue', 'teal', 'aqua']

const logo = document.querySelector('.dvd_logo')

let right_border = window.innerWidth - 211
let bottom_border = window.innerHeight - 101

window.onresize = () => {
  right_border = window.innerWidth - 211
  bottom_border = window.innerHeight - 101
}

logo.style.top = bottom_border / 2 + 'px'
logo.style.left = right_border / 2 + 'px'
logo.style.fill = colors[Math.floor(Math.random() * colors.length)]

let animation_interval = 5

logo.style.opacity = 1

let state = {
  x_direction: Math.random() > 0.5,
  y_direction: Math.random() > 0.5
}

const setColor = () => {
  let currentColor = logo.style.fill
  while (logo.style.fill === currentColor) {
    logo.style.fill = colors[Math.floor(Math.random() * colors.length)]
  }
}

let x_interval = setInterval(() => {
  if (parseInt(logo.style.left) === right_border) {
    state.x_direction = false
    setColor()
  }
  if (parseInt(logo.style.left) === 0) {
    state.x_direction = true
    setColor()
  }
  if (state.x_direction) logo.style.left = parseInt(logo.style.left) + 1 + 'px'
  if (!state.x_direction) logo.style.left = parseInt(logo.style.left) - 1 + 'px'
}, animation_interval)

let y_interval = setInterval(() => {
  if (parseInt(logo.style.top) === bottom_border) {
    state.y_direction = false
    setColor()
  }
  if (parseInt(logo.style.top) === 0) {
    state.y_direction = true
    setColor()
  }
  if (state.y_direction) logo.style.top = parseInt(logo.style.top) + 1 + 'px'
  if (!state.y_direction) logo.style.top = parseInt(logo.style.top) - 1 + 'px'
}, animation_interval)
