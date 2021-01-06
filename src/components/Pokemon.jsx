import { useState } from 'react';
import '../App.css';

const Pokemon = ({pokemon}) => {
    
    return ( 
        <>
          <div className="container">
            <img src={pokemon.sprites.front_shiny} alt="pokemon"></img>
            <div className="pokemon">{pokemon.name}</div> 
          </div>
          <hr></hr>      
        </>
        
     );
}
 
export default Pokemon;