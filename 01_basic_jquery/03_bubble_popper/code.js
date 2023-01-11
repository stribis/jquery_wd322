let bubbleCount = 0



// Add bubbles
$('.add').click(function () {
  bubbleCount++
  $('.bubbles').append(`<div class="bubble">${bubbleCount}</div>`)
  // $('.bubbles').append('<div class="bubble">' + bubbleCount + '</div>')
})

// Remove last bubble
$('.delete').click(function () {
  bubbleCount--
  $('.bubble:last-child').remove()
})

// Remove ALL bubbles
$('.delete-all').click(function () {
  bubbleCount = 0
  $('.bubble').remove()
})

function genColor () {
  // Generate random number between 0 and 255
  const randomColor = Math.floor( Math.random())
  // Use number to change BC of bubble 


  // Remember to CALL this function
}