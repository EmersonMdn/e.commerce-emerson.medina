import './ItemList.css';
import Item from './Item/Item'

function ItemList(props) {
    return ( 
    <div className='itemList'>
        {props.productos.map(x => 
        <Item 
            nombre={x.nombre} 
            precio={x.precio} 
            img={x.img} 
            stock={x.stock} />  ) } 
    </div> );
}

export default ItemList;