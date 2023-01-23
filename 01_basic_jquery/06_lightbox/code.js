

$('.gallery img').click( function () {
  const img_src = $(this).attr('src')

  $(`
    <div class="lightbox">
      <img src="${img_src}" alt="">
      <div class="close">❌</div>
    </div>
  `).appendTo('body').animate({
    opacity: 1
  }, 500, function() {
    $('.close').click(function () {
      $('.lightbox').remove()
    })
  })
})



$(document).on('click', '.close, .lightbox', function(){
  $('.lightbox').remove()
})