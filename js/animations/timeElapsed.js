const divs = [...document.querySelectorAll('.time-elapsed')]
const icons = [...document.querySelectorAll('.tech-icon')]

icons.forEach((icon, idx) => {
  icon.addEventListener('mouseenter', () => {
    const rect = icon.getBoundingClientRect()
    const div = divs[idx]
    div.style.display = 'inline-block'
    div.style.position = 'fixed'
    div.style.top = `${rect.top}px`
    div.style.left = `${rect.right + 15}px`
    console.log(div)
  })
})

icons.forEach((icon, idx) => {
  icon.addEventListener('mouseleave', () => {
    const div = divs[idx]
    div.style.display = 'none'
  })
})
