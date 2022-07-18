gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)
import { bounce } from '../stickman/bounce'
import { master } from '../stickman/master'

gsap.set('.stickman-scene', { autoAlpha: 0 })
gsap.set('.phantum-element, .bag-1', { pointerEvents: 'none' })

const scene = () => {
  const tl = gsap.timeline({
    paused: true,
    defaults: { duration: 1 },
    onComplete: bounce // bag movement at set intervals to attract user attention
  })
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
    .set('.phantum-element, .bag-1', { pointerEvents: 'auto' })
  return tl
}

const greeting = () => {
  const tl = gsap.timeline({ paused: true })
  gsap.set('.greeting h1, .greeting p', { autoAlpha: 1 })
  tl.from('.greeting h1, .greeting p', {
    autoAlpha: 0,
    y: '50px',
    stagger: 0.1,
    ease: 'elastic.out(1.5, 0.75)'
  }).to('.topbar', { autoAlpha: 1, duration: 1 }, '<')

  return tl
}

const sceneTl = scene()
const greetingTl = greeting()

window.addEventListener('load', () => {
  ScrollTrigger.matchMedia({
    // Mobile
    '(max-width: 934px)': () => {
      if (master.progress() > 0) return
      if (sceneTl.progress() > 0) return

      if (greetingTl.progress() === 0) greetingTl.play()

      gsap.set('.stickman-scene', { autoAlpha: 0 })

      gsap.to('.stickman-scene', {
        scrollTrigger: {
          trigger: '.stickman-scene',
          start: 'top 30%',
          onEnter: () => {
            if (sceneTl.progress() === 0 && document.readyState === 'complete')
              console.log(document.readyState)
            sceneTl.play()
          }
        },
        autoAlpha: 1,
        duration: 0.5
      })
    },
    // Desktop
    '(min-width: 935px)': () => {
      gsap.set('.stickman-scene', { autoAlpha: 1 })
      if (sceneTl.progress() === 0) sceneTl.play()
      if (greetingTl.progress() === 0) greetingTl.play().delay(0.5)
    }
  })
})
