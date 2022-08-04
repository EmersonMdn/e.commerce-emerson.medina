import './ItemCount.css';
import React, { useState } from 'react';



function ItemCount(props) {
    const [valor, setValor] = useState(1);

    const sumar = () => {
        if(valor < props.stock){
            setValor(valor + 1);
        } 
        
    }
    const restar = () => {
        if(valor > 1){
            setValor (valor - 1);
        }
        
    }
 
    const onAdd = () => {
        props.setIsActive(false);
        props.onCart(valor)
    }

    return ( 
    <div className='item-count-container'>
        <small className='disponible'>Disponibles: {props.stock}</small>
        <div className='item-count'>
           <button onClick={restar}> - </button><p> {valor} </p><button onClick={sumar}> + </button> 
        </div>
        <div className='addCart'>
            <p className='addCart-btn' onClick={onAdd}>Agregar al carrito</p>
        </div>
    </div>);
}

export default ItemCount;