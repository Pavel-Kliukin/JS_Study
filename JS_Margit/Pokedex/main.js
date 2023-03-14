const TypeArray = ['grass', 'poison', 'fire', 'flying', 'water', 'bug', 'normal',
  'electric', 'ground', 'fairy', 'fighting', 'psychic', 'rock', 'steel', 'ice',
  'ghost', 'dragon', 'dark']

const chosenTypes = ['water', 'rock']

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
  makeOutputArray(gen[i].startFrom, gen[i].limit)
}

// MAKE AN ARRAY OF CHOSEN POKEMON GENERATION
function makeOutputArray (startFrom, limit) {
  let outputArray = []
  // getting the list of all pokemons represented by objects: {name:'pokemon name', url:'http://...'}
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${startFrom}`)
    .then(response => response.json())
    .then(json => {

      //getting an outputArray with chosen generation
      const fetches = json.results.map(item => {
        return fetch(item.url).then(res => res.json())
      })
      Promise.all(fetches).then(res => {
        outputArray = res
        console.log('After Promise.all arr: ', outputArray)
        removeNonPickedTypes(outputArray)
      })
    })
}

// DELETE FROM outputArray POKEMONES WITH NON PICKED TYPES
function removeNonPickedTypes (outputArray) {
  //here we delete all pokemons (objects) with non picked types from outputArray
  // actualy, we can't delete items from outputArray while iterating it, so we have to do a copy of it and delete items from a copy
  let outputArrayCopy = [...outputArray] // this is the DEEP clone of outputArray
  for (const pokemon of outputArray) {
    let notChosenType = true;
    for (const element of pokemon.types) {
      if (chosenTypes.includes(element.type.name)) {
        notChosenType = false
      }
    }
    if (notChosenType) {
      outputArrayCopy.splice(outputArrayCopy.indexOf(pokemon), 1) //delete pokemon from outputArrayCopy
    }
  }
  output(outputArrayCopy)
}

// INSERT DATA TO HTML
function output (data) {

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
