
const tl1 = gsap.timeline({ repeat: 3})
const tl2 = gsap.timeline()

tl1
.to('.one', {
  x: 300,
  duration: 3,
  yoyo: true,
  repeat: 2
})
.to('.one', {
  y: 500,
  duration: 2
})

tl2
.to('.two', {
  x: 500,
  background: 'red',
  autoAlpha: 0,
  duration: 10
})