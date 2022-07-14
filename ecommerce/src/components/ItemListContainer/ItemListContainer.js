import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';
import React, { useEffect, useState } from 'react';
import SliderProducts from '../SliderProducts/SliderProducts';
import { useParams } from 'react-router-dom';

function ItemListContainer({ greeting }) {

    const [itemValue, setItem] = useState([]);
    const { idCategoria } = useParams();
    console.log(idCategoria);

    useEffect( () => {
        setTimeout(()=>{
            fetch('/products.json', {
                method: 'GET',
                headers: {
                   "Accept": "application/json"
           }
          })
            .then((resp) => resp.json())
            .then((data)=> {
                setItem(idCategoria ? data.filter((item) => item.categoria === idCategoria) : data);
                // elemento.nombre.toLowerCase().includes(valor)
            })
            .catch((err) => console.log(err))
        },500)
    }, [idCategoria]);

    return ( 
        <>
            <div className="container-slide">
             <SliderProducts/>
            </div>
            <div className='container' id='ItemListContainer'>
                <h3>{greeting}</h3> 
                <ItemList productos={itemValue} />
            </div>
        </>)
}

export default ItemListContainer; 