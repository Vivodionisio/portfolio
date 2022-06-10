export function toRest() {
  const tl = gsap.timeline({
    defaults: { duration: 0 }
  })
  tl.to('.stickman-9', { autoAlpha: 0, delay: 0.1 })
    .to('.stickman-r-1', { autoAlpha: 1 })
    .to('.stickman-r-1', { autoAlpha: 0, delay: 0.1 })
    .to('.stickman-r-2', { autoAlpha: 1 })
    .to('.stickman-r-2', { autoAlpha: 0, delay: 0.1 })
    .to('.stickman-1', { autoAlpha: 1 })
  return tl
}
