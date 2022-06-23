import './Item.css';
import React from 'react';
import ItemCount from './ItemCount/ItemCount';


function Item(props) {
    return ( 
        <>
            <div className='item'>
                <h4>{props.nombre}</h4>
                <img className='img-item' src= {props.img}  alt= {props.nombre} />
                <p>Precio: {props.precio}</p>
                <small>En stock: {props.stock}</small>
                <ItemCount />
            </div> 
        </>);
}

export default Item;