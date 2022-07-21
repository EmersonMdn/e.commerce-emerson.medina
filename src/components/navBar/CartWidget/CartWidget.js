import { Link } from "react-router-dom";
import CartDetail from "../../CartDetail/CartDetail";
import "./CartWidget.css";

const CartWidget = () => {
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
        <i className="fa-solid fa-cart-shopping"></i>
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
