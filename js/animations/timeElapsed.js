// gsap.registerPlugin(TextPlugin)
// import { formatDistance } from 'date-fns'

// const divs = gsap.utils.toArray('.time-elapsed')
// const icons = gsap.utils.toArray('.tech-icon')

// function type(div, rect, ms, words) {
//   const tl = gsap.timeline({ defaults: { transformOrigin: 'left' } })
//   tl.set(div, {
//     top: rect.top,
//     left: rect.right + 15
//   })
//     .to(div, { text: ms })
//     .to(div, { text: words })
//     .reversed(true)

//   return tl
// }

// // Mouseevents
// icons.forEach((icon, idx) => {
//   // caclulate the ref here and you'll have the posoitional values before the motion tween completes.
//   icon.addEventListener('mouseenter', () => {
//     doCoolStuff(icon, idx)
//   })
//   icon.addEventListener('mouseleave', () => {
//     doCoolStuff(icon, idx)
//   })
// })

// function doCoolStuff(icon, idx) {
//   console.log('cool stuff')
//   // Dom
//   const rect = icon.getBoundingClientRect()
//   const div = divs[idx]
//   const dateBegan = div.getAttribute('data-time-elapsed')
//   // get time elapsed
//   const prevTime = new Date(dateBegan)
//   const thisTime = new Date()
//   const diffMs = thisTime.getTime() - prevTime.getTime()
//   const diffInWords = formatDistance(prevTime, thisTime)

//   icon.anim = type(div, rect, diffMs, diffInWords)
//   icon.anim.reversed(!icon.anim.reversed())
// }
