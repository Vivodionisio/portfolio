import { taDa, lookLeft } from './tada'
import { fanOut } from './fanout'
import { shadowMorph } from './shadow_morph'
import { bagDistorts, bagOpens } from './bag'
import { overlay } from './overlay'
import { toRest } from './to_rest'
import { master } from './master'

// note: master is in its own module
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

// Event Listener
const phantomElement = document.querySelector('.phantom-element')
const bagElement = document.querySelector('.bag-1')

const eleArray = [phantomElement, bagElement]
eleArray.forEach(ele => {
  ele.addEventListener('mouseenter', () => {
    master.play()
  })
})
