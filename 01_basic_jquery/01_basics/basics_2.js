

//1. Insert an h2 after the h1 with 'Popcorn' as content

// With JS
// const myh1 = document.querySelector('h1')
// const myh2 = document.createElement('h2')
// myh2.innerText = 'Popcorn'

// myh1.after(myh2)

// With jQuery

// Before and after an element
$('h1').after('<h2>Popcorn</h2>')
$('h1').before('<h2>Coca Cola</h2>')

// In an element at the START or END
$('ul').prepend('<li>First</li>')
$('ul').append('<li>Last</li>')

$('ul').prepend('<li>First</li>').append('<li>Last</li>').css('color', 'green')

const foo = $('ul').css('color', 'purple').html('<li>deleted everything</li>')


console.log(foo)