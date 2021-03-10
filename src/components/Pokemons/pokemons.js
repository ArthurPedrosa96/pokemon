import React, {useEffect} from 'react';
import './pokemons.css';

const PokemonList = (props) => {

    return(
        <div className='pokemon-list'>
            {props.children}
        </div>
    )
}
export default PokemonList;