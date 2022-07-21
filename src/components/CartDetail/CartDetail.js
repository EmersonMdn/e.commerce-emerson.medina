import "./CartDetail.css";
import { useContext } from "react";
import { CartContext } from "../../contex/cartContex";
import CardItem from "./CartItem/CartItem";

function CartDetail() {
  const { cart, getTotal } = useContext(CartContext);

  const totalPrecio = getTotal().toFixed(2);
  return (
    <div className="order-container">
      {cart.length < 1 && <p>No hay productos en el carrito</p>}
      <ul className="list-group">
        {cart &&
          cart.map((item) => (
            <CardItem
              nombre={item.item.nombre}
              key={item.item.id}
              id={item.item.id}
              cantidad={item.cant}
              precio={item.item.precio}
              img={item.item.img}
              total={totalPrecio}
            />
          ))}
      </ul>

      <p>
        <strong>Total: $ {totalPrecio}</strong>
      </p>
    </div>
  );
}

export default CartDetail;
