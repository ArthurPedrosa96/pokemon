import React from 'react';
import './style.css';

const Header = (props)=> {
    return(
        <header>Pokedex {props.pokemon}</header>
    );
}

export default Header;