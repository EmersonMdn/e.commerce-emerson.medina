import './ItemCount.css';
import React, { useState } from 'react';


function ItemCount() {
    const [valor, setValor] = useState(1);

    const sumar = () => {
        if(valor < 5){
            setValor(valor + 1);
        }
        
    }
    const restar = () => {
        if(valor > 1){
            setValor (valor - 1);
        }
    }

    return ( 
    <div className='item-count-container'>
        <div className='item-count'>
           <button onClick={restar}> - </button><p> {valor} </p><button onClick={sumar}> + </button> 
        </div>
        <div className='addCart'>
            <p><a className='addCart-btn'  href='##'>Agregar al carrito</a></p>
        </div>
    </div>);
}

export default ItemCount;