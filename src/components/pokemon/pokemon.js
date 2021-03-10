import React from 'react';
import './pokemon.css';


const PokemonCard = ({nome, image, weight, type}) => {

    return(
        <section className='card'>
            <img src={image} className='pokemon-image'></img>
            <h3 className='pokemon-name'>{nome}</h3>
            <h4 className='pokemon-weight'>Type: {type}</h4>
            <h4 className='pokemon-weight'>Weight: {weight} kg</h4>
        </section>
    )
}

export default PokemonCard;
