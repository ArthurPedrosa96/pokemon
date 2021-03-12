import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../header/index.js';
import PokemonCard from '../pokemon/pokemon.js';
import PokemonList from '../Pokemons/pokemons.js';
import {getPokemon} from '../../data/data.js';
import { Link } from 'react-router-dom';

const Details = ()=> {
    const [pokemon, setPokemon] = useState([])
    let {id} = useParams();
    useEffect(()=>{
        getPokemon(id).then(data=>setPokemon(data))
    })
    return(
        <div className='App'>
            <Header pokemon={'- ' + pokemon.nome} />
            <div className='center pokemon-list'>
                    <PokemonCard nome={pokemon.nome} image={pokemon.image} weight={pokemon.weight} type={pokemon.type} id={pokemon.id} key={pokemon.id}/>
                    <Link to='/' className='back'>Back</Link> 
            </div>
            
        </div>
    )
}

export default Details