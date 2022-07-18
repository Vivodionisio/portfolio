// Stick man gesture toward bag, which thereupon opens for icons to fanout (see bag.js and fanout/js)

export function taDa() {
  const tl = gsap.timeline()
  tl.set('.stickman-1, .shadow-1', { autoAlpha: 0, delay: 0.3 })
    .set('.stickman-2, .shadow-2', { autoAlpha: 1 })
    .set('.stickman-2, .shadow-2', { autoAlpha: 0 }, '>0.1')
    .set('.stickman-3, .shadow-3', { autoAlpha: 1 })
    .set('.stickman-3, .shadow-3', { autoAlpha: 0 }, '>0.4')
  for (let i = 4; i <= 7; i++) {
    tl.to(`.stickman-${i}, .shadow-${i}`, {
      duration: 0.001,
      autoAlpha: 1,
      repeat: 1,
      repeatDelay: 0.01,
      yoyo: true
    })
  }
  tl.set('.stickman-8, .shadow-8', { autoAlpha: 1 })
    .set('.stickman-8, .shadow-8', { autoAlpha: 0 }, '>0.1')
    .set('.stickman-9, .shadow-9', { autoAlpha: 1 })
  return tl
}

export function lookLeft() {
  const tl = gsap.timeline({ defaults: { duration: 0 } })
  tl.to('.stickman-9-eyes-left', { autoAlpha: 1, delay: 1.3 }) // This bit needs to come after bag
    .to('.stickman-9-eyes-left', { autoAlpha: 0, delay: 0.4 })
    .to('.stickman-9', { autoAlpha: 1 })
  return tl
}
