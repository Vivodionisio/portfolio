const body = document.querySelector('body')
const hero = document.querySelector('.hero')
const stickmanScene = document.querySelector('.stickman-scene')
const cursorDiv = document.querySelector('.custom-cursor')
const arrow = document.querySelector('.arrow-cursor')
const phantomElement = document.querySelector('.phantom-element')
const anchorTags = [...document.querySelectorAll('a')]
// See text_anim.js for cursor animations related to the tech icons

let y, x, distance

body.addEventListener('mousemove', e => {
  // Set position for svg (replacement cursor)
  x = e.clientX
  y = e.clientY

  cursorDiv.setAttribute(
    'style',
    `top: ${e.clientY - 17}px; 
      left: ${e.clientX - 18}px; 
      opacity: 1;`
  )
})

// call rotate and scale
stickmanScene.addEventListener('mousemove', e => {
  rotate()
  scale()
})

// call rotate and scale
document.addEventListener('scroll', e => {
  rotate()
  scale()
})

// Rotate
function rotate() {
  const rect = phantomElement.getBoundingClientRect()

  // Get middle of element
  const w = rect.left + rect.width / 2
  const h = rect.top + rect.height / 2

  // Get delta values
  const deltaX = w - x
  const deltaY = h - y

  // Get mouse positions in radians
  const rad = Math.atan2(deltaY, deltaX)

  // Convert to degrees and round out
  let deg = Math.round(rad * (180 / Math.PI))

  // 360 deg variation
  if (deg < 0) {
    deg = (deg + 360) % 360
  }

  // Set property with deg
  arrow.style.setProperty('transform', `rotate(${deg + 90}deg)`)
}

// Scale
function scale() {
  distance = calculateDistance(x, y)
  const result = distance / 1000 + 0.6 > 1 ? 1 : distance / 1000 + 0.6
  gsap.set('.cursor', { '--scale': result })
}

// Scale - calculate distance
function calculateDistance(mouseX, mouseY) {
  const rect = phantomElement.getBoundingClientRect()
  rect.left
  return Math.floor(
    Math.sqrt(
      Math.pow(mouseX - (rect.left + rect.width / 2), 2) +
        Math.pow(mouseY - (rect.top + rect.height / 2), 2)
    )
  )
}

// Styles for mouse/stickman-scene interaction
stickmanScene.addEventListener('mouseenter', dotToArrow)
stickmanScene.addEventListener('mouseleave', arrowToDot)
hero.addEventListener('mouseleave', arrowToDot)

function dotToArrow() {
  gsap.set('.dot-cursor', { autoAlpha: 0 })
  gsap.set('.arrow-cursor', { autoAlpha: 1 })
}

function arrowToDot() {
  gsap.set('.dot-cursor', { autoAlpha: 1 })
  gsap.to('.cursor', { '--scale': 1 })
  gsap.set('.arrow-cursor', { autoAlpha: 0 })
}

// Styles for mouse/window interaction
document.addEventListener('mouseleave', () => {
  console.log('beautiful')
  gsap.set('.custom-cursor', { autoAlpha: 0 })
})

// Remove Arrow after stickman animation is complete
export function rmvRedundantArrow() {
  gsap.to('.arrow-cursor', { autoAlpha: 0 })
  gsap.to('.dot-cursor', { autoAlpha: 1 })
  stickmanScene.removeEventListener('mouseenter', dotToArrow)
  stickmanScene.removeEventListener('mouseleave', arrowToDot)
}

anchorTags.forEach(a => {
  a.addEventListener('mouseenter', () => {
    gsap.to('.dot-cursor', {
      scale: 0,
      autoAlpha: 0
    })
  })
  a.addEventListener('mouseleave', () => {
    gsap.to('.dot-cursor', {
      scale: 1,
      autoAlpha: 1
    })
  })
})
// throtteling - like a smaller framerate
