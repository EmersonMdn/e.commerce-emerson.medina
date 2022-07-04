
import CartWidget from './CartWidget/CartWidget';
import './NavBar.css';
import {Link, NavLink } from 'react-router-dom';


function NavBar() {
  return (<>
    <div className="row justify-content-around" id='navbar-main'>
      <nav className="navbar navbar-expand-lg" id='home'>
        <Link className="navbar-brand" to="/"> <i className="fa-solid fa-hat-wizard"></i>LUMOS</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><i className="fa-solid fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
          <li className="nav-item">
              <NavLink activeclassName="active" className="nav-link" to="/"> Inicio</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
               Catálogo
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Indumentaria</a>
                <a className="dropdown-item" href="#">Joyas</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <CartWidget />
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <p className='text-descuento'>15% de descuento en compras superiores a $ 2.999</p>

    </>
  );
}

export default NavBar;
