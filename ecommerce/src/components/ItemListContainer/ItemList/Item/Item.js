import './Item.css';
import React from 'react';
import ItemCount from '../../../ItemDetailContainer/ItemDetail/ItemCount/ItemCount';
import { Link } from 'react-router-dom';


function Item(props) {
    return ( 
        <>
            <div className='item'>
                <Link to ={ `/productos/${props.id}`} >
                <h4>{props.nombre}</h4>
                <img className='img-item' src= {props.img}  alt= {props.nombre} /> </Link>
                <p className='precio'>Precio: {props.precio}</p>
                
                <ItemCount stock={props.stock} />
            </div> 
        </>);
}

export default Item;