// Hover over icons too see experience represented by time alapsed from beginning to learn a given technology or tool.
// Imports to fanout.js

import formatDistanceToNow from 'date-fns/formatDistanceToNow'
gsap.registerPlugin(TextPlugin)

// Populating text elements for each tool (see FAN OUT)
const svgTextEles = gsap.utils.toArray('.icon-text')
const icons = gsap.utils.toArray('.tech-icon')

function type(ele, ms, words) {
  const tl = gsap.timeline({ defaults: { transformOrigin: 'left' } })
  tl.to(ele, { text: ms }).to(ele, { text: words }).reversed(true)

  return tl
}

export function makeIconButtons() {
  icons.forEach((icon, idx) => {
    const textEle = svgTextEles[idx]
    const dateBegan = textEle.getAttribute('data-time-elapsed')
    // get time elapsed
    const prevTime = new Date(dateBegan)
    const thisTime = new Date()
    const diffMs = thisTime.getTime() - prevTime.getTime()
    const diffInWords = `${formatDistanceToNow(new Date(dateBegan))} exp.` // date-fns

    icon.anim = type(textEle, diffMs, diffInWords)

    icon.addEventListener('mouseenter', () => {
      const iconClass = icon.getAttribute('class').split(' ')[0]
      icon.anim.reversed(!icon.anim.reversed())
      gsap.to('.dot-cursor', {
        scale: 0,
        autoAlpha: 0
      })
      gsap.to(`.${iconClass}`, { cursor: 'pointer' })
    })
    icon.addEventListener('mouseleave', () => {
      icon.anim.reversed(!icon.anim.reversed())
      gsap.to('.dot-cursor', {
        scale: 1,
        autoAlpha: 1
      })
    })
  })
}
