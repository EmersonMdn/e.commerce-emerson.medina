import ItemDetail from './ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {

    const [item, setItem] = useState([]);	
    const params = useParams();

    const getProductos = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.productId}`)
        .then(res => res.json())
        .then(data => setItem(data))
        
    }

    useEffect(()=>{
        setTimeout(()=>{
            getProductos();
            },2000)
    }, [])

    return ( 
    <>
        {item.length !== 0 && <ItemDetail productos={item} />}
    </> );
}

export default ItemDetailContainer;