import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Details from '../components/detailspage/details.jsx';
import HomePage from '../components/homepage/index.js';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/pokemons/:id' component={Details}/> 
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas;