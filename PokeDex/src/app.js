const form = document.querySelector('form')
const input = document.querySelector('input')
const namePokemon = document.querySelector('h1')
const weight = document.querySelector('#weight')
const size = document.querySelector('#size')
const type = document.querySelector('#type')
const hp = document.querySelector('#hp')
const perf = document.querySelector('#perf')
const img = document.querySelector('img')
const select = document.getElementById('pokemonNames')
let baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

fetchPokemonNames()

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let name = input.value
  let url = baseUrl + name
  fetch(url)
    .then((reponse) => reponse.json())
    .then((data) => {
      namePokemon.innerText = `${data.name}`
      size.innerText = `Taille : ${data.height}`
      weight.innerText = `Poids : ${data.weight}`

      for (let datas of data.types) {
        type.innerText = `Type : ${datas.type.name}`
      }
      let htmlContent = ''
      for (let i = 0; i < data.stats.length; i++) {
        htmlContent += `<li class="list-none">${data.stats[i].stat.name} : ${data.stats[i].base_stat}</li>`
      }
      perf.innerHTML = htmlContent

      img.src = data.sprites.front_default

      form.reset()
    })
    .catch((err) => console.log('Erreur : ' + err))
})

// Fonction pour récupérer les 10 premiers noms de Pokémon depuis l'API
function fetchPokemonNames() {
  fetch(`${baseUrl}?limit=10`)
    .then((response) => response.json())
    .then((data) => {
      const names = data.results.map((pokemon) => pokemon.name)
      names.forEach((name) => {
        const option = document.createElement('option')
        option.value = name
        option.textContent = name
        select.appendChild(option)
      })
    })
    .catch((error) =>
      console.error(
        'Erreur lors de la récupération des noms de Pokémon :',
        error,
      ),
    )
}
