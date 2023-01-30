
const apiUrl = 'https://jsonplaceholder.typicode.com/users'
getData ()
async function getData () {

  const response = await fetch(apiUrl)
  const data = await response.json()

  console.log(data)
  createList(data)

}

function createList (contacts) {

  contacts.forEach(contact => {
    
    const template  = `
      <h2 class="contact-name">${contact.name}</h2>
      <h3 class="contact-username"><span class="material-symbols-outlined">
      person
      </span> ${contact.username}</h3>
      <h3 class="contact-email"><span class="material-symbols-outlined">
      mail
      </span> ${contact.email}</h3>
      <h3 class="contact-phone"><span class="material-symbols-outlined">
      call
      </span> ${contact.phone}</h3>
      <div class="contact-profile"><img src="https://robohash.org/${contact.username}?set=set4" alt="${contact.username} Avatar"</div>
      <ul class="contact-address">
        <li><span class="material-symbols-outlined">
        location_city
        </span> ${contact.address.city}</li>
        <li><span class="material-symbols-outlined">
        signpost
        </span> ${contact.address.street}</li>
        <li><span class="material-symbols-outlined">
        tag
        </span> ${contact.address.suite}</li>
      </ul>
    `

    const contactContainer = document.createElement('div')
    contactContainer.classList.add('contact')
    contactContainer.innerHTML = template
    
  document.querySelector('main').appendChild(contactContainer)
  });

}