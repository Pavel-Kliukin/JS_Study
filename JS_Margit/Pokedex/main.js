let startFrom, limit

//this function startes from index.html by button click (i = generation number)
function chooseGen (i) {
  i = +i - 1
  const gen = [
    { startFrom: 0, limit: 150 },
    { startFrom: 151, limit: 100 },
    { startFrom: 251, limit: 135 },
    { startFrom: 386, limit: 107 },
    { startFrom: 493, limit: 156 },
    { startFrom: 649, limit: 72 },
    { startFrom: 721, limit: 88 },
    { startFrom: 809, limit: 96 },
    { startFrom: 905, limit: 110 },
  ]
  outputGeneration(gen[i].startFrom, gen[i].limit)
}

// getting the list of all pokemons represented by objects: {name:'pokemon name', url:'http://...'}
fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(response => response.json())

// output of chosen pokemon generation  
function outputGeneration (startFrom, limit) {
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${startFrom}`)
    .then(response => response.json())
    .then(json => {

      //getting an array with results of fetches
      const fetches = json.results.map(item => {
        return fetch(item.url).then(res => res.json())
      })

      Promise.all(fetches).then(res => names(res))
    })

  // insert data to HTML
  const names = (data) => {

    document.querySelector('#cards').innerHTML = data.map(item => {
      return `
      <div class="card">
        <div class="idAndTypes">
          <p class="pokID">#${item.id}</p>
          <p class="pokTypes">${item.types.map(element => {
        return `
            <img class="pokemonTypeImg" src="/assets/${element.type.name}.ico" alt="${element.type.name}">
            `}).join('')}
          </p>
        </div> 
        <img class="pokemonImg" src="${item.sprites.other.dream_world.front_default}" alt="${item.name}">
        <div class="bottomOfCard">
          <p class="pokName">${item.name.toUpperCase()}</p>  
        </div>
      </div>` }).join('')
  }
}
