window.addEventListener('load', () => {
  fetchJokes()
})

function fetchJokes() {
  console.log(1)
  fetch('https://api.icndb.com/jokes/random/5')
    .then((res) => res.json())
    .then((jokes) => {
      const ul = document.querySelector('#news-container')
      const fragment = document.createDocumentFragment()

      jokes.value.forEach((joke) => {
        const li = document.createElement('li')
        li.innerHTML = joke.joke
        fragment.appendChild(li)
      })

      ul.appendChild(fragment)
    })
}
