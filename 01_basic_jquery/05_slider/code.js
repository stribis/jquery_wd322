// Get the width of one slide
let slideWidth = $('.slide').width()

// Check screen size
$(window).resize(function() {
  console.log('Window Resized')
  slideWidth = $('.slide').width()
})

// Make sure we start with the FIRST slide
$('.slide').last().prependTo('.slideshow ul')

// Create Event Listeners 
// Move Right
$('.right').click(moveRight)
// Move Left
$('.left').click(moveLeft)


// Function for movement of slider
function moveRight () {
  $('.slideshow ul').animate(
    {
    'left': `-=${slideWidth}px`
    }, 
    1000, 
    function () {
      $('.slideshow ul').css('left', '')
      $('.slide').first().appendTo('.slideshow ul')
    }
  )
}


function moveLeft() {
  $('.slideshow ul').animate(
    {
    'left': `+=${slideWidth}px`
    }, 
    1000, 
    function () {
      $('.slideshow ul').css('left', '')
      $('.slide').last().prependTo('.slideshow ul')
    }
  )
}

// Autoplay
let autoplayTimer
// when the checkbox is clicked
$('#autoplay').click(function () {
  // if the checkbox is checked
  if ( $('#autoplay').prop('checked') ) {
    // start interval that runs a function (moveRight) every 3 seconds
    autoplayTimer = setInterval(function (){
      console.log('Changing slide')
      moveRight()
    }, 3000)
  } else {
    // Else 
    // CLEAR the interval to stop it from running
    clearInterval(autoplayTimer)
  }
})


$('.thumb').click(e => {
  $('.slider-container').toggleClass('hidden')
})