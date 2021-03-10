  const getPokemons = async () => {
  let pokemons = []
  for (let id=1; id < 100; id++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`
    try {
      let response = await fetch(url)
      let data = await response.json()
      data.id =
      pokemons.push(data)
    } catch (err) {
      console.error(err.mesage)
    }
  }
  const pokemonTreated = pokemons.map(pokemon => {
    let {front_default} = pokemon.sprites
    let {name} = pokemon.types[0].type
    
    return(
      {nome: pokemon.name, image: front_default, weight: pokemon.weight, type:name}
    ) 
  })
  console.log(pokemonTreated)
  return pokemonTreated
  }

  export default getPokemons