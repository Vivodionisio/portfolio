export function overlay() {
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
