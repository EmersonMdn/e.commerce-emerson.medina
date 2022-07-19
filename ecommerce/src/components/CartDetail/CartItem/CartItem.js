import { useContext } from 'react';
import { CartContext } from '../../../contex/cartContex';

function CardItem(props) {

    const { removeFromCart } = useContext(CartContext);

    let precio  = props.price * props.cantidad;

    return ( 
    <div className='table-item'>
        <table className="table table-dark">
            <thead>
                <tr>
                <th scope="col">Cantidad</th>
                <th scope="col">Nombre</th>
                <th scope="col"></th>
                
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">{props.cantidad}</th>
                <td>{props.name}</td>
                <td>{precio}</td>
                <td onClick={removeFromCart}>Eliminar</td>
                </tr>
            </tbody>
            </table>
    </div> );
}

export default CardItem;