import { blink } from './blink'

export const master = gsap.timeline({ paused: true, onComplete: blink })

blink()
