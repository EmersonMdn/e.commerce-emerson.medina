import CartDetail from "../CartDetail/CartDetail";
import "./CartDetailContainer.css";
import { CartContext } from "../../contex/cartContex";
import { useContext } from "react";
import { Link } from "react-router-dom";
import OrdenForm from "./OrdenForm/OrdenForm";

function CartDetailContainer() {
  const { clearCart } = useContext(CartContext);
  return (
    <>
      <div className="container cart-container">
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
      </div>
    </>
  );
}

export default CartDetailContainer;
