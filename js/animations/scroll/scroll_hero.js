gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)
import { bounce } from '../stickman/master'

gsap.set('.stickman-scene', { autoAlpha: 0 })
gsap.set('.phantum-element, .bag-1', { pointerEvents: 'none' })

function scene() {
  const tl = gsap.timeline({ defaults: { duration: 1 }, onComplete: bounce })
  tl.from(
    '.hill-1',
    {
      autoAlpha: 0,
      x: '100px',
      duration: 1,
      ease: 'elastic.out(1, 0.75)'
    },
    '<60%'
  )
    .from(
      '.hill-2, .stickman-1, .shadow-1, .bag-1, .bag-shadow-1, .stickman-9-blink',
      {
        x: '100px',
        duration: 1,
        ease: 'elastic.out(1, 0.75)'
      },
      '<20%'
    )
    .from('.hill-2, .stickman-1, .bag-1', { autoAlpha: 0, stagger: 0.2 }, '<')
    .from(
      '.shadow-1, .bag-shadow-1',
      {
        autoAlpha: 0,
        stagger: 0.2
      },
      '<20%'
    )
    .from(
      '.hill-3',
      {
        autoAlpha: 0,
        x: '50px',
        duration: 0.8,
        ease: 'elastic.out(1, 0.75)'
      },
      '<5%'
    )
    .from(
      '.mountain',
      {
        autoAlpha: 0,
        x: '50px',
        duration: 0.8,
        ease: 'elastic.out(1, 0.75)'
      },
      '<10%'
    )
    .to('.phantum-element, .bag-1', { pointerEvents: 'auto' })
  return tl
}

function greeting() {
  const tl = gsap.timeline()
  gsap.set('.greeting h1, .greeting p', { autoAlpha: 1 })
  tl.from('.greeting h1, .greeting p', {
    autoAlpha: 0,
    y: '50px',
    stagger: 0.1,
    ease: 'elastic.out(1.5, 0.75)'
  }).to('.topbar', { autoAlpha: 1, duration: 1 }, '<')

  return tl
}

ScrollTrigger.matchMedia({
  // Mobile
  '(max-width: 935px)': () => {
    if (gsap.getProperty('.img-overlay', 'opacity') === 1) return
    if (gsap.getProperty('.stickman-scene', 'opacity') === 1) return
    gsap.set('.stickman-scene', { autoAlpha: 0 })
    gsap.to('.stickman-scene', {
      scrollTrigger: {
        trigger: '.stickman-scene',
        start: 'top 30%',
        onEnter: () => {
          if (gsap.getProperty('.stickman-scene', 'opacity') === 1) return
          scene().play()
        }
      },
      autoAlpha: 1,
      duration: 0.5
    })
    greeting().play()
  },
  // Desktop
  '(min-width: 935px)': () => {
    if (gsap.getProperty('.stickman-scene', 'opacity') === 1) return
    gsap.set('.stickman-scene', { autoAlpha: 1 })
    scene().play()
    greeting().play().delay(0.5)
  }
})
