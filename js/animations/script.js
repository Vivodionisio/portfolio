const intro = gsap.timeline({ defaults: { duration: 1 } })

intro
  .from(
    '.hill-1',
    {
      autoAlpha: 0,
      x: '100px',
      duration: 1,
      ease: 'elastic.out(1, 0.75)'
    },
    '<60%'
  )
  .from(
    '.hill-2, .stickman-1, .shadow-1, .bag-1, .bag-shadow-1',
    {
      x: '100px',
      duration: 1,
      ease: 'elastic.out(1, 0.75)'
    },
    '<20%'
  )
  .from('.hill-2, .stickman-1, .bag-1', { autoAlpha: 0, stagger: 0.2 }, '<')
  .from(
    '.shadow-1, .bag-shadow-1',
    {
      autoAlpha: 0,
      stagger: 0.2
    },
    '<20%'
  )
  .from(
    '.hill-3',
    {
      autoAlpha: 0,
      x: '50px',
      duration: 0.8,
      ease: 'elastic.out(1, 0.75)'
    },
    '<5%'
  )
  .from(
    '.mountain',
    {
      autoAlpha: 0,
      x: '50px',
      duration: 0.8,
      ease: 'elastic.out(1, 0.75)'
    },
    '<10%'
  )
  .from(
    '.greeting h1, .greeting p',
    {
      autoAlpha: 0,
      y: '50px',
      // duration: 0.8,
      stagger: 0.1,
      ease: 'elastic.out(1.5, 0.75)'
    },
    0.5
  )
  .from('.topbar', { autoAlpha: 0, duration: 1 }, '<')
