fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(response => response.json())
  .then(json => console.log((json.results)))

fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
  .then(response => response.json())
  .then(json => {

    //getting an array with results of fetches
    const fetches = json.results.map(item => {
      return fetch(item.url).then(res => res.json())
    })

    Promise.all(fetches).then(res => names(res))
  })

const names = (data) => {
  document.querySelector('#cards').innerHTML = data.map(item => {
    return `
  <div class="card">
      <div class="topOfCard"><img class="pokemonImg" src="${item.sprites.other.dream_world.front_default}" alt="${item.name}"></div>
      <div class="bottomOfCard">${item.name}</div>
    </div>` }).join('')
}

