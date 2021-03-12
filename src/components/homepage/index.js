import React, {useEffect, useState} from 'react';
import Header from '../header/index.js';
import Loader from '../Loader/loader';
import PokemonCard from '../pokemon/pokemon.js';

import PokemonList from '../Pokemons/pokemons.js';
import getPokemons from '../../data/data.js';
import "./style.css";

const HomePage = ()=> {
  const [pokemons, setPokemons] = useState([])
  const [loaderOn, setLoaderOn] = useState(true)
  useEffect(() => { 
      getPokemons().then(data => setPokemons(data)).then(() => setLoaderOn(false))
  },[])
  if(loaderOn){
    return (
      <div className='App'>
        <Header />
        <div className='center-loader'>
          
            <Loader/>
          
        </div>
      </div>
    )
  }
  else {
    return (
    <div className="App">
      <Header/>
      <div className='center'>
        <PokemonList>
          {pokemons.map(pokemon => (
            <PokemonCard nome={pokemon.nome} image={pokemon.image} weight={pokemon.weight} type={pokemon.type} id={pokemon.id} key={pokemon.id}/>
          ))}
      </PokemonList>
      
      </div>
    </div>
  );
  }
}

export default HomePage