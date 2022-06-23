import './ItemList.css';
import React, { useState, useEffect } from 'react';
import Item from './Item/Item'

function ItemList() {

    const [itemValue, setItem] = useState([]);

    useEffect(()=>{
        setTimeout(()=>{
            fetch('./products.json')
            .then((resp) => resp.json())
            .then((data)=> setItem(data))
            },2000)
        
    }, [])
        
    return ( 
    <div className='itemList'>
        {itemValue.map(x => <Item nombre={x.nombre} precio={x.precio} img={x.img} stock={x.stock} />  ) } 
    </div> );
}

export default ItemList;