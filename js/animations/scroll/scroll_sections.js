gsap.registerPlugin(ScrollTrigger)

// About
gsap.from('section.about h2', {
  scrollTrigger: { trigger: 'section.about h2', start: 'top 70%' },
  autoAlpha: 0,
  y: 20,
  duration: 0.4
})

const aboutP = gsap.utils.toArray('section.about p')
const aboutH3 = gsap.utils.toArray('section.about h3')
const aboutItem = gsap.utils.toArray('section.about .item')
const aboutSpan = gsap.utils.toArray('.tech-item')
const elements = [...aboutP, ...aboutH3, ...aboutItem, ...aboutSpan]

console.log(aboutSpan)

elements.forEach(element => {
  gsap.from(element, {
    scrollTrigger: { trigger: element, start: 'top 90%' },
    autoAlpha: 0,
    y: 20,
    stagger: 0.4
  })
})

gsap.from('.about .resume', {
  scrollTrigger: { trigger: '.resume', start: 'top 90%' },
  autoAlpha: 0,
  y: 20,
  duration: 0.4
})

// Projects
gsap.from('section.projects h2', {
  scrollTrigger: { trigger: 'section.projects h2', start: 'top 70%' },
  autoAlpha: 0,
  y: 20,
  duration: 0.4
})

const exibits = gsap.utils.toArray('.exibit')
exibits.forEach(element => {
  gsap.from(element, {
    scrollTrigger: { trigger: element, start: 'top 75%' },
    autoAlpha: 0,
    y: 20,
    stagger: 0.4
  })
})

// Contact
gsap.from('.contact p', {
  scrollTrigger: { trigger: '.contact p', start: 'top 95%' },
  autoAlpha: 0,
  y: 20,
  duration: 0.4
})
