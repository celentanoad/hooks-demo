import { useState, useRef } from 'react';
import { useQuery } from 'react-query';
import Pokemon from './Pokemon';

const getPokemonData = async (num) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
    const data = await response.json();
    return data;
  }

const PokemonList = () => {
    const [list, setList] = useState([]);
    const [num, setNum] = useState(1);
    const {data, isLoading} = useQuery(["pokemon", {num}], () => getPokemonData(num));
    const lastPokemon = useRef('');
    
    const addItem = () => {
        setList([...list, data]);
    }

    const getRandomNum = () => {
        lastPokemon.current = data.name;
        setNum(Math.floor(Math.random() * 898 + 1));
    }

    return ( 
        <>
        <div className="container">
            <button onClick={getRandomNum} disabled={isLoading}>Find a Pokemon!</button>
            { 
                isLoading ? <p>Loading...</p>
                :
                <p>{data.name}</p>
            }
            <button onClick={addItem} value={data}>Add to List</button>
            <div>Last Pokemon Found: {lastPokemon.current}</div>
        </div>
        <div>
            {
                list.map(pokemon => {
                    return <Pokemon pokemon={pokemon} key={pokemon.id} />
                })
            }
        </div>
        </>
     );
}
 
export default PokemonList;