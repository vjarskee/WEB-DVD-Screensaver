import './style.css'

const colors = ['red', 'blue', 'white', 'magenta', 'pink', 'green', 'cyan']

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

let x_direction = Math.random() > 0.5
let y_direction = Math.random() > 0.5

logo.style.opacity = 1

let x_interval = setInterval(() => {
  if (parseInt(logo.style.left) === right_border) {
    x_direction = false
    logo.style.fill = colors[Math.floor(Math.random() * colors.length)]
  }
  if (parseInt(logo.style.left) === 0) {
    x_direction = true
    logo.style.fill = colors[Math.floor(Math.random() * colors.length)]
  }
  if (x_direction) logo.style.left = parseInt(logo.style.left) + 1 + 'px'
  if (!x_direction) logo.style.left = parseInt(logo.style.left) - 1 + 'px'
}, animation_interval)

let y_interval = setInterval(() => {
  if (parseInt(logo.style.top) === bottom_border) {
    y_direction = false
    logo.style.fill = colors[Math.floor(Math.random() * colors.length)]
  }
  if (parseInt(logo.style.top) === 0) {
    y_direction = true
    logo.style.fill = colors[Math.floor(Math.random() * colors.length)]
  }
  if (y_direction) logo.style.top = parseInt(logo.style.top) + 1 + 'px'
  if (!y_direction) logo.style.top = parseInt(logo.style.top) - 1 + 'px'
}, animation_interval)
