import { taDa, lookLeft } from './tada'
import { fanOut } from './fanout'
import { blink } from './blink'
import { shadowMorph } from './shadow_morph'
import { bagDistorts, bagOpens } from './bag'
import { overlay } from './overlay'
import { toRest } from './to_rest'

export const master = gsap.timeline({ paused: true, onComplete: blink })

window.addEventListener('load', () => {
  master
    .add(taDa()) // 0.9
    .add(bagDistorts()) // 0.5
    .add(bagOpens(), '-=0.4') // 0.6 //'-=0.4'
    .add(shadowMorph(), '-=0.2') //0.301
    .add(lookLeft()) // 1.7
    .add(overlay(), '-=1.9')
    .add(fanOut(), '-=2.9') // '-=2.9'
    .add(toRest())
})

blink()

// Event Listener
const phantumElement = document.querySelector('.phantum-element')
const bagElement = document.querySelector('.bag-1')

const eleArray = [phantumElement, bagElement]
eleArray.forEach(ele => {
  ele.addEventListener('mouseenter', () => {
    master.play()
  })
})
