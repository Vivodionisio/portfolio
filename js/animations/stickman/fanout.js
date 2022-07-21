// Icons 'fan out' animate along path

import { rmvRedundantArrow } from '../cursor/cursor'
import { makeIconButtons } from './text_anim'

export function fanOut() {
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
    onComplete: makeIconButtons,
    onStart: rmvRedundantArrow
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
          offsetX: 48
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
          offsetX: 48,
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
          offsetX: 49,
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
          offsetX: 38,
          offsetY: -10
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
