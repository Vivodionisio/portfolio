import { master } from './master'

export function bounce() {
  if (master.progress() > 0) return
  const allTweens = gsap.globalTimeline.getChildren()
  if (allTweens.every(tween => !tween.isActive())) {
    const tl = gsap.timeline({
      repeat: 1,
      onComplete: () => {
        gsap.delayedCall(10, bounce)
      }
    })
    tl.to(
      '.bag-1',
      {
        duration: 0.25,
        ease: 'back.out(4)',
        scaleX: 1.2,
        scaleY: 0.9
      },
      0
    )
      .to(
        '.bag-1',
        {
          duration: 0.25,
          ease: 'back.out(4)',
          scaleX: 1,
          scaleY: 1
        },
        0.25
      )
      .set('.bag-shadow-1', { autoAlpha: 0 }, 0)
      .set('.bag-shadow-d-1', { autoAlpha: 1 }, '>')
      .set('.bag-shadow-d-1', { autoAlpha: 0 }, 0.15)
      .set('.bag-shadow-d-2', { autoAlpha: 1 }, '>')
      .set('.bag-shadow-d-2', { autoAlpha: 0 }, 0.24)
      .set('.bag-shadow-d-1', { autoAlpha: 1 }, '>')
      .set('.bag-shadow-d-1', { autoAlpha: 0 }, 0.33)
      .set('.bag-shadow-1', { autoAlpha: 1 }, '>')
  }
}
