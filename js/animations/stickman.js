import { formatDistance } from 'date-fns'

gsap.registerPlugin(TextPlugin)

// BLINK
function blink() {
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

// SHAKE
function shake() {
  const allTweens = gsap.globalTimeline.getChildren()
  if (allTweens.every(tween => !tween.isActive())) {
    const tl = gsap.timeline({
      defaults: { duration: 0 },
      onComplete: () => {
        const num = gsap.utils.random(2, 6, 0.1)
        // console.log(num)
        gsap.delayedCall(num, shake)
      }
    })
    tl.to('.bag-1', { duration: 0.05, x: '-2%' })
      .to('.bag-1', { duration: 0.05, x: '4%' })
      .to('.bag-1', { duration: 0.05, x: '-4%' })
      .to('.bag-1', { duration: 0.05, x: '4%' })
      .to('.bag-1', { duration: 0.05, x: '-4%' })
      .to('.bag-1', { duration: 0.05, x: '4%' })
      .to('.bag-1', { duration: 0.05, x: '-4%' })
      .to('.bag-1', { duration: 0.05, x: '2%' })
  } else {
    setTimeout(() => {
      shake()
    }, 3000)
    return
  }
}

// const hillsIntro = gsap.timeline({ defaults: { duration: 1 } })

// function taDa() {
//   const tl = gsap.timeline()
//   tl.set('.stickman-1, .shadow-1', { opacity: 0, delay: 0.3 })
//     .set('.stickman-2, .shadow-2', { opacity: 1 })
//     .set('.stickman-2, .shadow-2', { opacity: 0 }, '>0.1')
//     .set('.stickman-3, .shadow-3', { opacity: 1 })
//     .set('.stickman-3, .shadow-3', { opacity: 0 }, '>0.4')
//     .set('.stickman-4, .shadow-4', { opacity: 1 })
//     .set('.stickman-4, .shadow-4', { opacity: 0 })
//     .set('.stickman-5, .shadow-5', { opacity: 1 })
//     .set('.stickman-5, .shadow-5', { opacity: 0 })
//     .set('.stickman-6, .shadow-6', { opacity: 1 })
//     .set('.stickman-6, .shadow-6', { opacity: 0 })
//     .set('.stickman-7, .shadow-7', { opacity: 1 })
//     .set('.stickman-7, .shadow-7', { opacity: 0 })
//     .set('.stickman-8, .shadow-8', { opacity: 1 })
//     .set('.stickman-8, .shadow-8', { opacity: 0 }, '>0.1')
//     .set('.stickman-9, .shadow-9', { opacity: 1 })
//   // duration 0.9
//   return tl
// }

// TA DA

function taDa() {
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
  // duration 0.9
  return tl
}

// LOOK LEFT
function lookLeft() {
  const tl = gsap.timeline({ defaults: { duration: 0 } })
  tl.to('.stickman-9-eyes-left', { autoAlpha: 1, delay: 1.3 }) // This bit needs to come after bag
    .to('.stickman-9-eyes-left', { autoAlpha: 0, delay: 0.4 })
    .to('.stickman-9', { autoAlpha: 1 })
  return tl
}

// SHADOW MORPH
function shadowMorph() {
  const tl = gsap.timeline({
    defaults: { duration: 0, immediateRender: false }
  })
  // for some reason some delay is needed on shadow-9 tween
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

// BAG DISTORTS
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

// BAG OPENS

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
    .to('.bag-1, .bag-shadow-1', { autoAlpha: 0 })
    .to('.bag-2, .bag-shadow-2', { autoAlpha: 1 })
    .to('.bag-2, .bag-shadow-2', { autoAlpha: 0, delay: 0.1 })
    .to('.bag-3, .bag-shadow-3', { autoAlpha: 1 })
    .to('.bag-3, .bag-shadow-3', { autoAlpha: 0, delay: 0.1 })
    .to('.bag-4, .bag-shadow-4', { autoAlpha: 1 })
  // duration 0.6
  return tl
}

// SCENE OVERLAY
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

// FAN OUT
function fanOut() {
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
    },
    onComplete: makeIconButtons
  })

  tl.to(
    '.react',
    {
      scale: 1.2,
      motionPath: {
        path: '.motion',
        align: '.motion',
        start: 0.1,
        end: 0.99
      }
    },
    1
  )
    .to(
      '.react-text',
      {
        scale: 1.1,
        motionPath: {
          path: '.motion',
          align: '.motion',
          start: 0.1,
          end: 0.99,
          offsetX: 65,
          offsetY: -8
        }
      },
      0
    )
    .to(
      '.greensock',
      {
        scale: 0.98,
        motionPath: {
          path: '.motion',
          align: '.motion',
          start: 0.1,
          end: 0.84
        }
      },
      1
    )
    .to(
      '.greensock-text',
      {
        scale: 1.05,
        motionPath: {
          path: '.motion',
          align: '.motion',
          start: 0.1,
          end: 0.84,
          offsetX: 55
          // offsetY: -20
        }
      },
      0
    )
    .to(
      '.svg',
      {
        scale: 0.86,
        motionPath: {
          path: '.motion',
          align: '.motion',
          start: 0.1,
          end: 0.68
        }
      },
      1
    )
    .to(
      '.svg-text',
      {
        // scale: 1,
        motionPath: {
          path: '.motion',
          align: '.motion',
          start: 0.1,
          end: 0.68,
          offsetX: 45
        }
      },
      0
    )
    .to(
      '.github',
      {
        scale: 0.95,
        motionPath: {
          path: '.motion',
          align: '.motion',
          start: 0.1,
          end: 0.549
        }
      },
      1
    )
    .to(
      '.github-text',
      {
        // scale: 0.95,
        motionPath: {
          path: '.motion',
          align: '.motion',
          start: 0.1,
          end: 0.549,
          offsetX: 45,
          offsetY: -5
        }
      },
      1
    )
    .to(
      '.npm',
      {
        scale: 0.86,
        motionPath: {
          path: '.motion',
          align: '.motion',
          start: 0.1,
          end: 0.44
        }
      },
      1
    )
    .to(
      '.npm-text',
      {
        // scale: 0.95,
        motionPath: {
          path: '.motion',
          align: '.motion',
          start: 0.1,
          end: 0.44,
          offsetX: 45,
          offsetY: -10
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
          end: 0.34
        }
      },
      1
    )
    .to(
      '.api-text',
      {
        // scale: 0.85,
        motionPath: {
          path: '.motion',
          align: '.motion',
          start: 0.1,
          end: 0.34,
          offsetX: 45,
          offsetY: -5
        }
      },
      1
    )
    .to(
      '.javascript',
      {
        scale: 0.67,
        motionPath: {
          path: '.motion',
          align: '.motion',
          start: 0.1,
          end: 0.21
        }
      },
      1
    )
    .to(
      '.javascript-text',
      {
        // scale: 0.8,
        motionPath: {
          path: '.motion',
          align: '.motion',
          start: 0.1,
          end: 0.21,
          offsetX: 35,
          offsetY: -5
        }
      },
      1
    )
    .to(
      '.sass',
      {
        scale: 0.72,
        motionPath: {
          path: '.motion',
          align: '.motion',
          start: 0.1,
          end: 0.1
        }
      },
      1
    )
    .to(
      '.sass-text',
      {
        // scale: 0.8,
        motionPath: {
          path: '.motion',
          align: '.motion',
          start: 0.1,
          end: 0.1,
          offsetX: 35,
          offsetY: -10
        }
      },
      1
    )

  return tl
}

const svgTextEles = gsap.utils.toArray('.icon-text')
const icons = gsap.utils.toArray('.tech-icon')

function type(ele, rect, ms, words) {
  const tl = gsap.timeline({ defaults: { transformOrigin: 'left' } })

  tl.to(ele, { text: ms }).to(ele, { text: words }).reversed(true)

  return tl
}

function makeIconButtons() {
  console.log('hi buttons')
  icons.forEach((icon, idx) => {
    const rect = icon.getBoundingClientRect()
    const textEle = svgTextEles[idx]
    // const div = divs[idx]
    const dateBegan = textEle.getAttribute('data-time-elapsed')
    console.log(dateBegan)
    // get time elapsed
    const prevTime = new Date(dateBegan)
    const thisTime = new Date()
    const diffMs = thisTime.getTime() - prevTime.getTime()
    const diffInWords = formatDistance(prevTime, thisTime)

    icon.anim = type(textEle, rect, diffMs, diffInWords)
    icon.addEventListener('mouseenter', () => {
      icon.anim.reversed(!icon.anim.reversed())
    })
    icon.addEventListener('mouseleave', () => {
      icon.anim.reversed(!icon.anim.reversed())
    })
  })
}

// To rest state
function toRest() {
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

const master = gsap.timeline({ paused: true, onComplete: blink })

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
shake()

const phantumElement = document.querySelector('.phantum-element')
const bagElement = document.querySelector('.bag-1')
const eleArray = [phantumElement, bagElement]
eleArray.forEach(ele => {
  ele.addEventListener('mouseenter', () => {
    master.play()
  })
})
// phantumElement.addEventListener('mouseenter', () => {

// })

// console.log()
// gsap.globalTimeline.getChildren().filter(tween => tween.isActive())
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
