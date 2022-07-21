import ItemCount from './ItemCount/ItemCount';
import './ItemDetail.css';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../contex/cartContex';

function ItemDetail(props) {

    const [isActive, setIsActive] = useState(true);


    const { addToCart } = useContext(CartContext);

    
    const onCart  = (count) => {
        addToCart(props.productos, count);
    }


    return ( 
    <div className="detailContainer">

        <h1 className='detail-h1'>Detalles del producto</h1> <hr></hr>

        <div className='container row'>

            <div className='col-md-6 imgDetail'>
                <div className='imgExample animated-box in'>
                    <img src={props.productos.img} alt={props.productos.nombre}/>
                </div>
            </div>

            <div className='col-md-6 details'>        
                <h2>{props.productos.nombre}</h2>
                <h4>Categoria: {props.productos.categoria}</h4>
                <p>En stock: {props.productos.stock}kg</p>

                <div className='itemCount-container'>
                    {isActive && <ItemCount
                    onCart={onCart}
                    setIsActive={setIsActive}
                    stock={props.productos.stock} 
                    key={props.productos.id} />}

                {/* Lleva a '/cart'  */}
                {!isActive && <Link to={'/cart'}><p className='finish-btn'>Terminar con el pago</p></Link>}
                </div>
            </div>
        </div>
    </div> );


} 

export default ItemDetail;