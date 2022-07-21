import './CartDetail.css';
import { useContext, useEffect } from 'react';
import { CartContext } from '../../contex/cartContex';
import CardItem from './CartItem/CartItem';

function CartDetail() {

    const { cart, clearCart, getTotal } = useContext(CartContext);

    const totalPrecio = getTotal();
    return ( 
    <div className='table-container'>
        {(cart.length < 1) && <h1>No hay productos en el carrito</h1>}
        {cart && (cart.map((item) =>
            <CardItem 
                name={item.item.name}
                key={item.item.id}
                id={item.item.id}
                cantidad={item.cant}
                price={item.item.height}
                total={totalPrecio}/>
        ))}

        <button className='clear-btn' onClick={clearCart}>Vaciar carrito</button>
    </div> );
}

export default CartDetail;