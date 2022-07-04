import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';
import React, { useEffect, useState } from 'react';
import SliderProducts from '../SliderProducts/SliderProducts';

function ItemListContainer() {

    const [itemValue, setItem] = useState([]);

    const fetchProdructos = () => {
        fetch('./products.json')
        .then((resp) => resp.json())
        .then((data)=> setItem(data))
    }

    useEffect(()=>{
        setTimeout(()=>{
            fetchProdructos();
            },1000)
    }, [])

   

    return ( 
        <>
            <div className="container-slide">
             <SliderProducts/>
            </div>
            <div className='container' id='ItemListContainer'>
                <h3>Todos los productos</h3> 
                <ItemList productos={itemValue} />
            </div>
        </>)
}

export default ItemListContainer; 