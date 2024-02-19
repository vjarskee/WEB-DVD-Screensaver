import './style.css'

const colors: string[] = ['white', 'red', 'purple', 'fuchsia', 'green', 'lime', 'yellow', 'blue', 'teal', 'aqua']

const logo: HTMLDivElement = document.querySelector('.dvd_logo') as HTMLDivElement

let right_border: number = window.innerWidth - 211
let bottom_border: number = window.innerHeight - 101

logo.style.top = bottom_border / 2 + 'px'
logo.style.left = right_border / 2 + 'px'
logo.style.fill = colors[Math.floor(Math.random() * colors.length)]

const animation_interval: number = 5

logo.style.opacity = '1'

const state: Record<'x_direction' | 'y_direction', boolean> = {
  x_direction: Math.random() > 0.5,
  y_direction: Math.random() > 0.5
}

const setColor = (): void => {
  const currentColor: string = logo.style.fill
  while (logo.style.fill === currentColor) {
    logo.style.fill = colors[Math.floor(Math.random() * colors.length)]
  }
}

setInterval((): void => {
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

setInterval((): void => {
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

window.onresize = () => {
  right_border = window.innerWidth - 211
  bottom_border = window.innerHeight - 101
}
