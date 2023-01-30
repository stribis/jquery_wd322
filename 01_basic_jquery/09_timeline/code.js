

// Has a circle been clicked 
$('.point').click(function (e) {
  

  // If the card is already open:
  if(!$(this).find('.card').hasClass('hidden')){
    // Hide the clicked card
    $(this).find('.card').addClass('hidden')
  } else { // If the card is not open
    // Reset all other cards
    $('.card').addClass('hidden')
    // Toggle the clicked card
    $(this).find('.card').toggleClass('hidden')
  }
})