import { useQuery } from 'react-query';
import { useState } from 'react';



const getPokemonData = async (num) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
  const data = await response.json();
  return data;
}

const Item = ({item}) => {
    const [num, setNum] = useState(1);
    const {data} = useQuery("pokemon", getPokemonData(num));

    const handleClick = () => {
        setNum(Math.floor(Math.random() * 898 + 1));
    }

    return ( 
        <>
        <div>
           {item}
        </div>
        <button onClick={handleClick}>Get New Pokemon</button>
        {data.name}
        </>
        
     );
}
 
export default Item;