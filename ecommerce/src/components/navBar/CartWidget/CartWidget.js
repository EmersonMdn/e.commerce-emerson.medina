import CartDetail from '../../CartDetail/CartDetail';
import './CartWidget.css';

const CartWidget = () => {
    return ( <>
             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-cart-shopping"></i>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <CartDetail />
              </div></> 
              );
}
 
export default CartWidget;