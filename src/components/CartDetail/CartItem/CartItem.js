import "./CardItem.css";
function CardItem(props) {
  let precio = (props.precio * props.cantidad).toFixed(2);

  return (
    <>
      <li className="list-group-item">
        <strong>{props.cantidad}</strong> {props.nombre} ${precio} 
      </li>
    </>
  );
}

export default CardItem;
