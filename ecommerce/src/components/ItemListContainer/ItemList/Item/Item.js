import './Item.css';
import React from 'react';
import ItemCount from './ItemCount/ItemCount';


function Item(props) {
    return ( 
        <>
            <div className='item'>
                <h4>{props.nombre}</h4>
                <img className='img-item' src= {props.img}  alt= {props.nombre} />
                <p className='precio'>Precio: {props.precio}</p>
                <small className='disponible'>Disponibles: {props.stock}</small>
                <ItemCount stock={props.stock} />
            </div> 
        </>);
}

export default Item;