/*
  Each time we click on the '.square' div we create a new square in the body
*/
// With JS

// document.querySelector('.square').addEventListener('click', e => {
  // 1. Create an Element
//   const myDiv = document.createElement('div')
  // 2. Add class to element
//   myDiv.classList.add('square')
  // myDiv.setAttribute('class', 'square')
  // 3. Append element in HTML
//   document.querySelector('body').appendChild(myDiv)

// })

// document.querySelector('.square').addEventListener('click', function(e) {
  
// })


// With jQuery
$('.square').click(function () {
  $('body').append('<div class="square"></div>')
  console.log('Hi There')
})

// We can also use normal functions as normal in jQuery
function setColor (col) {
  $('.square').css('background-color', col)
}


// Input 
// Activates every key stroke
$('input').on('input', function () {
  // Console the input
  console.log($('input').val())
  setColor($('input').val())
})