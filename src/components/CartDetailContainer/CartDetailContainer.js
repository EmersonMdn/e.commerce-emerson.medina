import CartDetail from "../CartDetail/CartDetail";
import "./CartDetailContainer.css";
import { CartContext } from "../../contex/cartContex";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import OrdenForm from "./OrdenForm/OrdenForm";

function CartDetailContainer() {
  const { clearCart, cart } = useContext(CartContext);
  const [isActive, setIsActive] = useState(1);

  function isActiveHandler() {
    setIsActive(!isActive);
  }

  return (
    <>
      {isActive ? (
        <div className="cart-container">
          <div className="container-cartDetail">
            <h3>Productos en el carro</h3>
            <CartDetail />
          </div>
          <div className="botones">
            <Link to={"/"} className="btn btn-dark">
              <i className="fa-regular fa-circle-left"></i> Volver
            </Link>
            {cart.length >= 1 ? (
              <button className="btn btn-primary" onClick={isActiveHandler}>
                Proceder pago
              </button>
            ) : (
              <button className="btn btn-primary" disabled>
                Proceder pago
              </button>
            )}
            {cart.length >= 1 ? (
              <button className="btn btn-warning" onClick={clearCart}>
                Vaciar carro
              </button>
            ) : (
              <button className="btn btn-warning" disabled>
                Vaciar carro
              </button>
            )}
          </div>
        </div>
      ) : null}
      {!isActive && (
        <div className="container">
          <div className="row">
            <OrdenForm />
          </div>
        </div>
      )}
    </>
  );
}

export default CartDetailContainer;

{
  /* <div className="container cart-container">
        <div className="row">
          <div className="col-md-8 form-buyer-info">
            <OrdenForm />
          </div>

          <div className="col-md-4 cartDetails">
            <CartDetail />

            <div className="botones">
              <button className="vaciar-carro" onClick={clearCart}>
                Vaciar carro
              </button>
              <Link to={"/"} className="volver">
                Volver
              </Link>
            </div>
          </div>
        </div>
      </div> */
}
