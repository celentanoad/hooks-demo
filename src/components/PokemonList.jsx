import { useState } from 'react';
import Item from './Pokemon';

const Wishlist = () => {
    const [list, setList] = useState([]);


    const addItem = (pokemon) => {
        setList([...list, pokemon]);
    }

    
    return ( 
        <>
        <button onClick={addItem}>Add to List</button>
        <div>
            {
                list.map(item => {
                    return <Item item={item} addItem={addItem}/>
                })
            }
        </div>
        </>
     );
}
 
export default Wishlist;