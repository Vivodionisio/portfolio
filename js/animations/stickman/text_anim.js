import formatDistanceToNow from 'date-fns/formatDistanceToNow'
// import { formatDistanceToNow } from 'date-fns'
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
    console.log(dateBegan)
    // get time elapsed
    const prevTime = new Date(dateBegan)
    const thisTime = new Date()
    const diffMs = thisTime.getTime() - prevTime.getTime()
    console.log(thisTime.getTime())
    console.log(diffMs)
    const diffInWords = `${formatDistanceToNow(new Date(dateBegan))} exp.` // date-fns

    icon.anim = type(textEle, diffMs, diffInWords)
    icon.addEventListener('mouseenter', () => {
      icon.anim.reversed(!icon.anim.reversed())
    })
    icon.addEventListener('mouseleave', () => {
      icon.anim.reversed(!icon.anim.reversed())
    })
  })
}
