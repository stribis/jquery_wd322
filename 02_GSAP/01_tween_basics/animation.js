// Tween with "to"
// Set the end state of the element 

gsap.to('.to', {
  x: 400,
  y: 400,
  background: 'red',
  yoyo: true,
  repeat: -1,
  duration: 2
})


// Tween with "from"
// Set the START state of the element
gsap.from('.from', {
  x : 1000,
  y : 300,
  duration: 3
})

// Tween with "fromTo()"

gsap.fromTo('.fromTo', {
  // From 
  x: 500,
  y: 500,
  background: 'blue'
}, {
  // To
  x: 0,
  y: 500,
  background: 'green',
  duration: 5
} )

// Set CSS Properties (NOT ANIMATED)
gsap.set('.set', {
  background: 'orangered'
})