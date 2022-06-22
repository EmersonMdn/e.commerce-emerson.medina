import './CartWidget.css';

const CartWidget = () => {
    return ( <>
             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-cart-shopping"></i>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <p className="dropdown-item">No hay nada en el carro</p>
              </div></> 
              );
}
 
export default CartWidget;