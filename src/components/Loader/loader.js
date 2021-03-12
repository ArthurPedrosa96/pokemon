import React from 'react';
import './loader.css';

export default function Loader() {
    return(
        <div>
            <img src='Poké_Ball_icon.png' className="pokeball animation"></img>
            <h4>Loading data...</h4>
        </div>
    )
}