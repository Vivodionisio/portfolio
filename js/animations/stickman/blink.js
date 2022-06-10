export function blink() {
  const allTweens = gsap.globalTimeline.getChildren()
  if (allTweens.every(tween => !tween.isActive())) {
    const tl = gsap.timeline({ defaults: { duration: 0.1 } })
    tl.set('.stickman-9-blink', { autoAlpha: 1, delay: 0.5 }).to(
      '.stickman-9-blink',
      {
        autoAlpha: 0,
        delay: 0.15,
        onComplete: () => {
          const num = gsap.utils.random(2, 6, 0.1)
          // console.log(num)
          gsap.delayedCall(num, blink)
        }
      }
    )
  } else {
    setTimeout(() => {
      blink()
    }, 3000)
    return
  }
}
