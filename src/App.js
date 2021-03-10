import react, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/header';
import PokemonCard from './components/pokemon/pokemon';

import PokemonList from './components/Pokemons/pokemons';
import getPokemons from './data/data.js';


function App() {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
      getPokemons().then(data => setPokemons(data))
  },[])
  return (
    <div className="App">
      <Header/>
      <div className='center'>
        <PokemonList>
          {pokemons.map(pokemon => (
            <PokemonCard nome={pokemon.nome} image={pokemon.image} weight={pokemon.weight} type={pokemon.type}/>
          ))}
      </PokemonList>
      </div>
    </div>
  );
}

export default App;
