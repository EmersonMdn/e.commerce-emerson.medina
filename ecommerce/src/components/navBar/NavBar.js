import './NavBar.css';

function NavBar() {
  return (
    <div className="row justify-content-around" id='navbar-main'>
      <nav className="navbar navbar-expand-lg" id='home'>
        <a className="navbar-brand" href="#home">  <i class="fa-solid fa-wand-sparkles"></i>Lumos</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
          <li className="nav-item">
              <a className="nav-link" href="#home"> Inicio</a>
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
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-cart-shopping"></i>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <p className="dropdown-item">No hay nada en el carro</p>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    
  );
}

export default NavBar;
