// Stickman shadow morphs as the scene dissapears behin him (see overlay.js)
// Imports to master.js

export function shadowMorph() {
  const tl = gsap.timeline({
    defaults: { duration: 0, immediateRender: false }
  })
  tl.to('.shadow-9', { autoAlpha: 0 })
    .to('.shadow-morph-1', { autoAlpha: 1 })
    .to('.shadow-morph-1', { autoAlpha: 0, delay: 0.1 })
    .to('.shadow-morph-2', { autoAlpha: 1 })
    .to('.shadow-morph-2', { autoAlpha: 0, delay: 0.1 })
    .to('.shadow-morph-3', { autoAlpha: 1 })
    .to('.shadow-morph-3', { autoAlpha: 0, delay: 0.1 })
    .to('.shadow-morph-4', { autoAlpha: 1 })

  return tl
}
