import React from 'react';
import {Link} from 'react-router-dom';
import './pokemon.css';


const PokemonCard = ({nome, image, weight, type, id}) => {

    return(
        <Link to={`/pokemons/${id}`} className='card'>
            <img src={image} className='pokemon-image'></img>
            <h3 className='pokemon-name'>{nome}</h3>
            <h4 className='pokemon-weight'>Type: {type}</h4>
            <h4 className='pokemon-weight'>Weight: {weight} kg</h4>
        </Link>
    )
}

export default PokemonCard;
