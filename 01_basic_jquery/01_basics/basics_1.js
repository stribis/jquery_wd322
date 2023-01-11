// Element selection in jQuery is very simple
// you just need a $()
// What ever you put in between your brackets is your selection

// 1. Select h1 element and make it red and underlined

// With JS:
//const myH1 = document.querySelector('h1')

// With jQuery
const myH1_jq = $('h1')

// Change color to red

// With JS
//myH1.style.color = 'red'
//myH1.style.textDecoration = 'underline'

// With jQuery
myH1_jq.css({
  color: 'red',
  'text-decoration': 'underline'
})


// 2. Make paragraph green
$('#myParagraph').css({'text-decoration': 'underline', color: 'green'})


// 3. Select all LIs and make them red

// With JS we need to create a loop and do the same action to all the li's
// const myLis = document.querySelectorAll('ul li')

// for ( let i = 0; i < myLis.length; i++){
//   myLis[i].style.color = 'red'
// }

// myLis.forEach(li => {
//   li.style.color = 'red'
// })

// With jQuery, we don't need to worry about loops
$('ul li').css({'color': 'red'})