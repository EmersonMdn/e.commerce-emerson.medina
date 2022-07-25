import { Link } from "react-router-dom";
import { CartContext } from "../../../contex/cartContex";
import { useContext } from "react";
import CartDetail from "../../CartDetail/CartDetail";
import "./CartWidget.css";

const CartWidget = () => {

  const { cart } = useContext(CartContext);
  return (
    <>
      <a
        className="nav-link dropdown-toggle"
        href="#."
        id="navbarDropdownMenuLink"
        role="button"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fa-solid fa-cart-shopping"></i> {cart.length > 0 && <span className="badge">{cart.length}</span>}
      </a>

      <div className="dropdown-menu dropdown-orders" aria-labelledby="navbarDropdownMenuLink">
        <CartDetail />

        <Link to={"/cart"}>
          <p className="oncart-btn">Ir al carro</p>
        </Link>
      </div>
    </>
  );
};

export default CartWidget;
