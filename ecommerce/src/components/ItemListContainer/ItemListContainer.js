import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';


function ItemListContainer() {
    return ( 
    <div className='container' id='ItemListContainer'>
        <h3>Todos los productos</h3> 
        <ItemList />
    </div> );
}

export default ItemListContainer; 