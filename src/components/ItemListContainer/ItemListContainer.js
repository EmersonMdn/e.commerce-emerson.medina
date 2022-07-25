import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';
import React, { useEffect, useState } from 'react';
import SliderProducts from '../SliderProducts/SliderProducts';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore} from 'firebase/firestore';

function ItemListContainer({ greeting }) {

    const [itemValue, setItem] = useState([]);
    const { idCategoria } = useParams();

    const db = getFirestore()

    const getProducts = async () => {
        const productRef = (collection(db, 'productos'));
        const docSnap = await getDocs(productRef);

        const dataProducts = docSnap.docs.map(producto => {
            const items = {...producto.data(),
                id: producto.id,};
                return items
        })
        return dataProducts;
    }

    useEffect( () => {
        getProducts().then(data => {
            setItem(idCategoria ? data.filter((item) => item.categoria === idCategoria) : data)})
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