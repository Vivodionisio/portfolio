// bag distorts and then opens before icons animate along path to their position (see fanout.js)
// Imports to master.js

export function bagDistorts() {
  const tl = gsap.timeline()
  gsap.set('.bag-1', { transformOrigin: 'bottom' })

  tl.to('.bag-1', {
    duration: 0.25,
    ease: 'back.out(4)',
    scaleX: 1.2,
    scaleY: 0.9
  })
    .to('.bag-1', {
      duration: 0.25,
      ease: 'back.out(4)',
      scaleX: 1,
      scaleY: 1
    })
    .set('.bag-shadow-1', { autoAlpha: 0 }, 0)
    .set('.bag-shadow-d-1', { autoAlpha: 1 }, '>')
    .set('.bag-shadow-d-1', { autoAlpha: 0 }, 0.15)
    .set('.bag-shadow-d-2', { autoAlpha: 1 }, '>')
    .set('.bag-shadow-d-2', { autoAlpha: 0 }, 0.24)
    .set('.bag-shadow-d-1', { autoAlpha: 1 }, '>')
    .set('.bag-shadow-d-1', { autoAlpha: 0 }, 0.33)
    .set('.bag-shadow-1', { autoAlpha: 1 }, '>')

  return tl
}

export function bagOpens() {
  const tl = gsap.timeline({
    defaults: { duration: 0 }
  })
  tl.to('.bag-1', { duration: 0.05, x: '-2%' })
    .to('.bag-1', { duration: 0.05, x: '4%' })
    .to('.bag-1', { duration: 0.05, x: '-4%' })
    .to('.bag-1', { duration: 0.05, x: '4%' })
    .to('.bag-1', { duration: 0.05, x: '-4%' })
    .to('.bag-1', { duration: 0.05, x: '4%' })
    .to('.bag-1', { duration: 0.05, x: '-4%' })
    .to('.bag-1', { duration: 0.05, x: '2%' })
    .to('.bag-1, .bag-shadow-1', { autoAlpha: 0 })
    .to('.bag-2, .bag-shadow-2', { autoAlpha: 1 })
    .to('.bag-2, .bag-shadow-2', { autoAlpha: 0, delay: 0.1 })
    .to('.bag-3, .bag-shadow-3', { autoAlpha: 1 })
    .to('.bag-3, .bag-shadow-3', { autoAlpha: 0, delay: 0.1 })
    .to('.bag-4, .bag-shadow-4', { autoAlpha: 1 })
  // duration 0.6
  return tl
}
