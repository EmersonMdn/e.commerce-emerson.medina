import  './NavBar.css'

function NavBar() {
  return (
    <header id='navBar'>
      <nav className='navBar'>
        <ul className='navBar__list'>
          <li className='navBar__item'><i class="fa-solid fa-basket-shopping logo"></i> Mi E-Commerce</li>
          <li className='navBar__item'>Inicio</li>
          <li className='navBar__item'>Productos</li>
          <li className='navBar__item'>Contacto</li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;