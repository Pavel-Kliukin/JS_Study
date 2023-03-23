let chosenTypes = []
let outputArray = []
let allPokemonsArray = []

// At the start of index.html we are getting the list of all pokemons 
// It represented by objects: {name:'pokemon name', url:'http://...'}
fetch(`https://pokeapi.co/api/v2/pokemon?limit=1015&offset=0`)
  .then(response => response.json())
  .then(json => {
    const fetches = json.results.map(item => {
      return fetch(item.url).then(res => res.json())
    })
    Promise.all(fetches).then(res => {
      allPokemonsArray = res
    })
  })

// function to turn on/off pressed state for genereration buttons
function genButtonsHighlight (g = 0) {
  for (i = 1; i <= 9; i++) {
    if (g == i) {
      document.getElementById('gen' + i).classList.add('pressedGenButton')
    } else {
      document.getElementById('gen' + i).classList.remove('pressedGenButton')
    }
  }
}

//This function startes from index.html by button click (i = generation number)
function chooseGen (g = false) {

  g = +g;
  genButtonsHighlight(g) // generation button pressed/unpressed state

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
  makeOutputArray(gen[g - 1].startFrom, gen[g - 1].limit)
}

// MAKE AN ARRAY OF CHOSEN POKEMON GENERATION
function makeOutputArray (startFrom, limit) {
  outputArray = [...allPokemonsArray] // this is the DEEP clone of allPokemonsArray

  //Here we get an array with chosen generation of pokemons
  outputArray = outputArray.slice(startFrom, startFrom + limit)

  if (chosenTypes.length == 0) { // if we don't have chosen types to filter
    output(outputArray) // we just output whole generation
  } else { // otherwise, we filter output by chosen types
    removeNonPickedTypes(outputArray)
  }
}

//TYPE FILTER
function typeFilter (type) {

  let icon = document.getElementById(type + 'Img')
  icon.classList.toggle('pressed')


  if (chosenTypes.includes(type)) {
    chosenTypes.splice(chosenTypes.indexOf(type), 1)
  } else {
    chosenTypes.push(type)
  }
  if (chosenTypes.length == 0) {// if we remove all filters,
    output(outputArray) // then we output whole generation
  } else {
    removeNonPickedTypes(outputArray)
  }
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

// SEARCH POKEMON BY NAME
// It searches online in array of all pokemons

let searchInput = document.querySelector('#pokName')
searchInput.addEventListener('input', (event) => {
  searchByName(event.target.value)
})

function searchByName (name) {
  genButtonsHighlight() // generation button pressed/unpressed state
  outputArray = []
  for (const pokemon of allPokemonsArray) {
    if (pokemon.name.toLowerCase().includes(name.toLowerCase())) {
      outputArray.push(pokemon)
    }
  }
  output(outputArray)
}

// INSERT DATA TO HTML
function output (data) {

  document.querySelector('#cards').innerHTML = data.map(item => {

    let src = item.sprites.other.dream_world.front_default
    if (src == null) { src = 'assets/noImage.png' }

    return `
    <div class="card">
      <div class="idAndTypes">
        <p class="pokID">#${item.id}</p>
        <p class="pokTypes">${item.types.map(element => {
      return `
          <img class="pokemonTypeImg" src="assets/${element.type.name}.png" alt="${element.type.name}">
          `}).join('')}
        </p>
      </div> 
      <img class="pokemonImg" src="${src}" alt="${item.name}">
      <div class="bottomOfCard">
        <p class="pokName">${item.name.toUpperCase()}</p>  
      </div>
    </div>` }).join('')
}

// ### BACK TO TOP BUTTON CHANGE ON SCROLL ###
const backToTopButton = document.querySelector('#backToTop')
window.onscroll = () => {

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
}

// This code will scroll everything to top
const getToTop = () => {
  // we need to write both lines, because they are working in different browsers:
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
backToTopButton.addEventListener('click', getToTop)
// ---------------------------------------