// gsap.registerPlugin(TextPlugin, MotionPathPlugin)

// gsap.set(
//   '.hill-1, .hill-2, .hill-3, .mountain, .stickman-1, .shadow-1, .bag-1, .bag-shadow-1',
//   { autoAlpha: 0 }
// )

// const fadeIn = gsap.timeline({ defaults: { ease: 'power4.inOut' } })
// fadeIn
//   .to('.mountain, .mountain', { autoAlpha: 1, duration: 0.5, delay: 0.5 })
//   .to('.hill-2, .mountain', { autoAlpha: 1, duration: 0.5 }, '<50%')
//   .to('.hill-1, .mountain', { autoAlpha: 1, duration: 0.5 }, '<50%')
//   .to('.hill-3, .mountain', { autoAlpha: 1, duration: 0.5 }, '<50%')
//   .to('.stickman-1, .shadow-1', { autoAlpha: 1, duration: 0.5, stagger: 0.1 })
//   .to('.bag-shadow-1, .bag-1', { autoAlpha: 1, duration: 0.5, stagger: 0.1 })

// const hillsAlive = gsap.timeline({
//   defaults: { duration: 5, ease: 'power2.inOut' }
// })

// hillsAlive
//   .from(
//     '.hill-2, .stickman-1, .shadow-1, .bag-1, .bag-shadow-1',
//     {
//       x: '40px'
//     },
//     0
//   )
//   .from('.hill-1', { xPercent: -20 }, 0)
//   .from('.hill-3', { xPercent: 32 }, 0)
//   .from('.mountain', { xPercent: 40 }, 0)

// Blink

function blink() {
  if (master.progress() > 0) {
    const tl = gsap.timeline({ defaults: { duration: 0.1 } })
    tl.to('.stickman-9-blink', { opacity: 1, delay: 0.5 }).to(
      '.stickman-9-blink',
      {
        opacity: 0,
        delay: 0.15,
        onComplete() {
          gsap.delayedCall(gsap.utils.random(3, 5, 0.1), () => blink())
        }
      }
    )
  } else {
    setTimeout(() => {
      blink()
    }, 2000)
    return
  }
}

// const hillsIntro = gsap.timeline({ defaults: { duration: 1 } })

function taDa() {
  const tl = gsap.timeline({
    defaults: { duration: 0 }
  })
  tl.to('.stickman-1, .shadow-1', { opacity: 0, delay: 0.3 })
    .to('.stickman-2, .shadow-2', { opacity: 1 })
    .to('.stickman-2, .shadow-2', { opacity: 0, delay: 0.1 })
    .to('.stickman-3, .shadow-3', { opacity: 1 })
    .to('.stickman-3, .shadow-3', { opacity: 0, delay: 0.4 })
    .to('.stickman-4, .shadow-4', { opacity: 1 })
    .to('.stickman-4, .shadow-4', { opacity: 0, delay: 0 })
    .to('.stickman-5, .shadow-5', { opacity: 1 })
    .to('.stickman-5, .shadow-5', { opacity: 0, delay: 0 })
    .to('.stickman-6, .shadow-6', { opacity: 1 })
    .to('.stickman-6, .shadow-6', { opacity: 0, delay: 0 })
    .to('.stickman-7, .shadow-7', { opacity: 1 })
    .to('.stickman-7, .shadow-7', { opacity: 0, delay: 0 })
    .to('.stickman-8, .shadow-8', { opacity: 1 })
    .to('.stickman-8, .shadow-8', { opacity: 0, delay: 0.1 })
    .to('.stickman-9, .shadow-9', { opacity: 1 })
  // duration 0.9
  return tl
}

function lookLeft() {
  const tl = gsap.timeline({ defaults: { duration: 0 } })
  tl.to('.stickman-9-eyes-left', { opacity: 1, delay: 1.3 }) // This bit needs to come after bag
    .to('.stickman-9-eyes-left', { opacity: 0, delay: 0.4 })
    .to('.stickman-9', { opacity: 1 })
  return tl
}

function shadowMorph() {
  const tl = gsap.timeline({
    defaults: { duration: 0, immediateRender: false }
  })
  // for some reason some delay is needed on shadow-9 tween
  tl.to('.shadow-9', { opacity: 0 })
    .to('.shadow-morph-1', { opacity: 1 })
    .to('.shadow-morph-1', { opacity: 0, delay: 0.1 })
    .to('.shadow-morph-2', { opacity: 1 })
    .to('.shadow-morph-2', { opacity: 0, delay: 0.1 })
    .to('.shadow-morph-3', { opacity: 1 })
    .to('.shadow-morph-3', { opacity: 0, delay: 0.1 })
    .to('.shadow-morph-4', { opacity: 1 })
  return tl
}

function bagDistorts() {
  const tl = gsap.timeline()
  gsap.set('.bag-1', { transformOrigin: 'bottom' })
  gsap.set('.bag-shadow-1', { transformOrigin: 'top right' })

  tl.to('.bag-1', {
    duration: 0.25,
    ease: 'back.out(4)',
    scaleX: 1.2,
    scaleY: 0.9
  }).to('.bag-1', {
    duration: 0.25,
    ease: 'back.out(4)',
    scaleX: 1,
    scaleY: 1
  })

  // duration 0.5
  return tl
}

function bagOpens() {
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
    .to('.bag-1, .bag-shadow-1', { opacity: 0 })
    .to('.bag-2, .bag-shadow-2', { opacity: 1 })
    .to('.bag-2, .bag-shadow-2', { opacity: 0, delay: 0.1 })
    .to('.bag-3, .bag-shadow-3', { opacity: 1 })
    .to('.bag-3, .bag-shadow-3', { opacity: 0, delay: 0.1 })
    .to('.bag-4, .bag-shadow-4', { opacity: 1 })
  // duration 0.6
  return tl
}

function fanOut() {
  gsap.registerPlugin(MotionPathPlugin)
  gsap.set(
    '.html5, .css3, .sass, .javascript, .api, .npm, .github, .svg, .greensock, .react',
    {
      xPercent: -50,
      yPercent: -50,
      visibility: 'hidden'
    }
  )

  const tl = gsap.timeline({
    defaults: {
      duration: 0.6,
      visibility: 'visible',
      ease: 'power.inOut'
    }
  })

  tl.to(
    '.react',
    {
      scale: 1.08,
      motionPath: {
        path: '.motion',
        align: '.motion',
        start: 0.1,
        end: 1
      }
    },
    1
  )
    .to(
      '.greensock',
      {
        scale: 0.9,
        motionPath: {
          path: '.motion',
          align: '.motion',
          start: 0.1,
          end: 0.86
        }
      },
      1
    )
    .to(
      '.svg',
      {
        scale: 0.78,
        motionPath: {
          path: '.motion',
          align: '.motion',
          start: 0.1,
          end: 0.7
        }
      },
      1
    )
    .to(
      '.github',
      {
        scale: 0.85,
        motionPath: {
          path: '.motion',
          align: '.motion',
          start: 0.1,
          end: 0.58
        }
      },
      1
    )
    .to(
      '.npm',
      {
        scale: 0.85,
        motionPath: {
          path: '.motion',
          align: '.motion',
          start: 0.1,
          end: 0.475
        }
      },
      1
    )
    .to(
      '.api',
      {
        scale: 0.85,
        motionPath: {
          path: '.motion',
          align: '.motion',
          start: 0.1,
          end: 0.37
        }
      },
      1
    )
    .to(
      '.javascript',
      {
        scale: 0.71,
        motionPath: {
          path: '.motion',
          align: '.motion',
          start: 0.1,
          end: 0.238
        }
      },
      1
    )
    .to(
      '.sass',
      {
        scale: 0.75,
        motionPath: {
          path: '.motion',
          align: '.motion',
          start: 0.1,
          end: 0.12
        }
      },
      1
    )

  return tl
}

function sceneOverlay() {
  const tl = gsap.timeline({ defaults: { duration: 1 } })

  tl.to('.img-overlay', {
    duration: 1,
    opacity: 1
  })
    .to('.hill-1, .hill-2, .hill-3, .mountain ', { opacity: 0 }, 0)
    .to('.title', { webkitTextFillColor: '#303030' }, 0)
    .to('.greeting p', { color: '#303030' }, 0)
  return tl
}

// To rest state
function toRest() {
  const tl = gsap.timeline({
    defaults: { duration: 0 }
  })
  tl.to('.stickman-9', { opacity: 0, delay: 0.1 })
    .to('.stickman-r-1', { opacity: 1 })
    .to('.stickman-r-1', { opacity: 0, delay: 0.1 })
    .to('.stickman-r-2', { opacity: 1 })
    .to('.stickman-r-2', { opacity: 0, delay: 0.1 })
    .to('.stickman-1', { opacity: 1 })
  return tl
}

const master = gsap.timeline({ paused: true })

master
  .add(taDa()) // 0.9
  .add(bagDistorts()) // 0.5
  .add(bagOpens(), '-=0.4') // 0.6
  .add(shadowMorph(), '-=0.2') //0.301
  .add(lookLeft()) // 1.7
  .add(sceneOverlay(), '-=1.9')
  .add(fanOut(), '-=2.9')
  .add(toRest())

blink()

const phantumElement = document.querySelector('.phantum-element')
phantumElement.addEventListener('mouseenter', () => {
  console.log('hi')
  master.play()
})

// ----

// TODO: After animation is complete check if the mouse is in the phantum element, if it is not, then animate to rest position, if it is set up an onmouseleave event listener with a callback to animate figure to rest position.

// BACK TO REST

// const toRest = gsap.timeline({
//   defaults: { duration: 0 }
// })

// const bagClose = gsap.timeline({ defaults: { duration: 0 } })

// bagClose
//   .to('.bag-4, bag-3', { opacity: 0, delay: 0.6 })
//   .to('.bag-2', { opacity: 1 })
//   .to('.bag-2', { opacity: 0, delay: 0.1 })
//   .to('.bag-1', { opacity: 1 })

// fan.reverse()

// gsap.to('.scene-overlay', {
//   delay: 0,
//   duration: 1,
//   fill: 'hsla(180, 100%, 100%, 0)'
// })

// gsap.to('.shadow-whiteout-4', { delay: 0.5, opacity: 0, duration: 1 })
// gsap.to('.shadow-1', { delay: 0.5, opacity: 1, duration: 1.5 })
// gsap.to('.bag-shadow-4', {
//   delay: 0.5,
//   opacity: 0,
//   duration: 1
// })
// gsap.to('.bag-shadow-1', { delay: 0.5, opacity: 1, duration: 1.5 })
// gsap.to('.bag-shadow-1', { delay: 0.5, opacity: 1, duration: 1.5 })

// toRest
//   .to('.stickman-9', { opacity: 0 })
//   .to('.stickman-r-1', { opacity: 1 })
//   .to('.stickman-r-1', { opacity: 0, delay: 0.1 })
//   .to('.stickman-r-2', { opacity: 1 })
//   .to('.stickman-r-2', { opacity: 0, delay: 0.1 })
//   .to('.stickman-r-3', { opacity: 1 })
//   .to('.stickman-r-3', { opacity: 0, delay: 0.1 })
//   .to('.stickman-r-4', { opacity: 1 })
//   .to('.stickman-r-4', { opacity: 0, delay: 0.1 })
//   .to('.stickman-r-5', { opacity: 1 })
//   .to('.stickman-r-5', { opacity: 0, delay: 0.1 })
//   .to('.stickman-r-6', { opacity: 1 })
//   .to('.stickman-r-6', { opacity: 0, delay: 0.1 })
//   .to('.stickman-1', { opacity: 1 })

// phantumEle.addEventListener('mouseleave', () => {
//   mouseInPhantEle = false
//   if (!isInProgress) fanClose(fan)
// })

// --------

// fan open (with callback for fan close)
// const phantumEle = document.querySelector('.phantum-element')
// phantumEle.addEventListener('mouseover', () => {
//   animation()
// })
