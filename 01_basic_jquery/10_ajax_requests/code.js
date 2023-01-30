
// Fetch with .then()

// fetch('https://jsonplaceholder.typicode.com/posts').then( response => {
//   response.json().then( data => {
//     console.log(data)
//   } )
// } )


// Fetch with async await
// getData()
async function getData () {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  console.log(data)

}

// JQuery AJAX

// $.ajax({
//   url: 'https://jsonplaceholder.typicode.com/posts',
//   success: function (data) {
//     console.log(data)
//   }
// })


// JQuery getJson

$.getJSON('https://jsonplaceholder.typicode.com/posts', function (data) {
  console.log(data)
})