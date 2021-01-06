import { useState } from 'react';
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
    const {data} = useQuery("pokemon", getPokemonData(num));

    const addItem = () => {
        setList([...list, data]);
    }

    const getRandomNum = () => {
        setNum(Math.floor(Math.random() * 898 + 1));
    }

    return ( 
        <>
        <button onClick={getRandomNum}>Find a Pokemon!</button>
        {/* <p>{data.name}</p> */}
        <button onClick={addItem} value={data}>Add to List</button>
        <div>
            {
                list.map(pokemon => {
                    return <Pokemon pokemon={pokemon} />
                })
            }
        </div>
        </>
     );
}
 
export default PokemonList;