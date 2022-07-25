import ItemDetail from './ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, doc, getFirestore, getDoc } from 'firebase/firestore';



function ItemDetailContainer() {
 
    const [item, setItem] = useState([]);	

    const { productId } = useParams();

    const db = getFirestore()

    const getProduct = async (id) => {
        const productCollectionRef = collection(db, 'productos');
        const docRef = doc(productCollectionRef, id);

        const docSnap = await getDoc(docRef);

        return docSnap.data();
    }

    useEffect( () => {
        getProduct(productId)
        .then((data) => {
            setItem(data)})
    }, [productId]);

    return ( 
    <>
        <ItemDetail productos={item} />
    </> );
}

export default ItemDetailContainer;