import ItemDetail from './ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {

    const [item, setItem] = useState([]);	
    const params = useParams();

<<<<<<< HEAD
//  public key = 1c790537dc1197bee2d55d2a8c9e0282
// private key = 14c433f1dca1815d5506fef1fcb6ce858158b835
// ts 1
// 1c790537dc1197bee2d55d2a8c9e028214c433f1dca1815d5506fef1fcb6ce858158b835

// hash = 5327d1e311189350c6d2b29de6983850



    const getProductos = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.productId}`)
        .then((res) => res.json())
        .then((data) => setItem(data))
=======
    const getProductos = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.productId}`)
        .then(res => res.json())
        .then(data => setItem(data))
>>>>>>> 822a9c0c55b08c96440a635825eac598b5a02fdb
        
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