  const getPokemons = async () => {
  let pokemons = []
  for (let id=1; id <= 100; id++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`
    try {
      let response = await fetch(url)
      let data = await response.json()
      data.id = id
      pokemons.push(data)
      
    } catch (err) {
      console.error(err.mesage)
    }
  }
  console.log(pokemons)
  const pokemonTreated = pokemons.map(pokemon => {
    let {front_default} = pokemon.sprites
    let {name} = pokemon.types[0].type
    let nomeCap = pokemon.name
    let letra1 = nomeCap.slice(0,1).toUpperCase()
    let letrasRestantes = nomeCap.slice(1)
    nomeCap = letra1+letrasRestantes
    
    return(
      {nome: nomeCap, image: front_default, weight: pokemon.weight, type:name, id: pokemon.id}
    ) 
  })
  console.log(pokemonTreated)
  return pokemonTreated
  }

  export default getPokemons

  export const getPokemon = async(id)=> {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`
    try {
      let response = await fetch(url)
      let pokemon = await response.json()
      let {front_default} = pokemon.sprites
      let {name} = pokemon.types[0].type
      let nomeCap = pokemon.name
      let letra1 = nomeCap.slice(0,1).toUpperCase()
      let letrasRestantes = nomeCap.slice(1)
      nomeCap = letra1+letrasRestantes
      return(
      {nome: nomeCap, image: front_default, weight: pokemon.weight, type:name, id: pokemon.id}
    )
    } catch (err) {
      console.error(err.mesage)
    }
  }

  