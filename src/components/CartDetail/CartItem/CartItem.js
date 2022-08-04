import "./CardItem.css";
import { useContext } from "react";
import { CartContext } from "../../../contex/cartContex";

function CardItem(props) {
  let precio = (props.precio * props.cantidad).toFixed(2);

  const {  removeFromCart } = useContext(CartContext);

  return (
    <>
      <li className="list-group-item" key={props.id}>
        <strong>{props.cantidad}</strong> {props.nombre} <span className="priceStyle">${precio}</span> <button onClick={()=> removeFromCart(props.id)} className="eliminarItem">Eliminar</button>
      </li>
    </>
  );
}

export default CardItem;
