import ItemCount from './ItemCount/ItemCount';
import './ItemDetail.css';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext, CartProvider } from '../../../contex/cartContex';

function ItemDetail(props) {

    const [isActive, setIsActive] = useState(true);
    const [myCart, setMyCart] = useState([]);


    const {addToCart} = useContext(CartContext);

    /**Funcion que recibe el producto del child
     * 
     * @param {onCart}  
     */
    const onCart  = (onCart) => {
        const onCartData = {
            ...onCart,
            uso: 'hola'
        }
        setMyCart(onCartData);
        addToCart(onCartData, onCartData.count);
    }


    return ( 
    <div className="detailContainer">

        <h1 className='detail-h1'>Detalles del producto</h1> <hr></hr>

        <div className='container row'>

            <div className='col-md-6 imgDetail'>
                <div className='imgExample animated-box in'>
                    <p>IMG</p>
                </div>
            </div>

            <div className='col-md-6 details'>        
                <h2>{props.productos.name}</h2>
                <h4>Habilidades: {props.productos.abilities.length}</h4>
                <p>Peso: {props.productos.weight}kg</p>

                <div className='itemCount-container'>
                    {isActive && <ItemCount
                    onCart={onCart}
                    setIsActive={setIsActive}
                    stock={props.productos.abilities.length} 
                    name={props.productos.name} 
                    price = {10}/>}

                {/* Lleva a '/cart'  */}
                {!isActive && <Link to={'/cart'}><p className='finish-btn'>Terminar con el pago</p></Link>}
                </div>

                {/* Simulacion de carrito */}
                {!isActive && <div className='cartEx'>
                    <h4>Carrito</h4>
                    <p>Nombre: {myCart.name} <br></br>
                Cantidad: {myCart.count}</p>
                </div>}
            </div>
        </div>
    </div> );


} 

export default ItemDetail;