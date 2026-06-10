// Generate an HTML list string from the array of clients
const list = (clients) => {
  const htmlArray = clients.map((client, index) => {
    return `<li class="list-group-item d-flex justify-content-between" data-index="${index}">
  ${client.name}
  <strong>$ ${client.balance}</strong>
</li>`
  })
  return htmlArray.join('')
}

// Sort the array of clients by a specified property
const order = (clients, property) => {
  return clients.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1
    } else if (a[property] > b[property]) {
      return 1
    } else {
      return 0
    }
  })
}

// Calculate the total sum of balances from every client
const total = (clients) => {
  return clients.reduce((accumulator, client) => {
    return accumulator + client.balance
  }, 0)
}

// Find and return a single client's information based on the index
const info = (index) => {
  return clients.find((client, clientIndex) => {
    if (clientIndex === index) {
      return true
    }
  })
}

// Filter clients based on a search query (case-insensitive)
const search = (query) => {
  return clients.filter((client) => {
    return client.name.toLowerCase().includes(query.toLowerCase())
  })
}