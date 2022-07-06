import './Item.css';
import React from 'react';
import ItemCount from './ItemCount/ItemCount';
import { Link } from 'react-router-dom';


function Item(props) {
    return ( 
        <>
            <div className='item'>
                <Link to ={`/productos/${props.id}`} ><h4>{props.nombre}</h4></Link>
                <img className='img-item' src= {props.img}  alt= {props.nombre} />
                <p className='precio'>Precio: {props.precio}</p>
                <small className='disponible'>Disponibles: {props.stock}</small>
                <ItemCount stock={props.stock} />
            </div> 
        </>);
}

export default Item;