import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container container-fluid">
      <div className="row">
        <div className="col-md-4 table-ftr table-izq">
          Redes sociales
          <ul className="list-group">
            <li className="list-group-item footer-list">
              <a href="#home">Instagram</a>
            </li>
            <li className="list-group-item footer-list">
              <a href="#home">Twitter</a>
            </li>
            <li className="list-group-item footer-list">
              <a href="#home">TikTok</a>
            </li>
            <li className="list-group-item footer-list">
              <a href="#home">Facebook</a>
            </li>
          </ul>
        </div>

        <div className="col-md-4 table-ftr table-mid">
          <ul className="list-group">
            <li className="list-group-item footer-list">
              <a href="#home">Sobre nuestros productos</a>
            </li>
            <li className="list-group-item footer-list">
              <a href="#home">Donde encontrarnos</a>
            </li>
            <li className="list-group-item footer-list">
              <a href="#home">Contacto</a>
            </li>
          </ul>
        </div>

        <div className="col-md-4 table-ftr table-der">
          <ul className="list-group">
            <li className="list-group-item footer-list">
              <a href="#home">Politicas de privacidad</a>
            </li>
            <li className="list-group-item footer-list">
              <a href="#home">Terminos y condiciones</a>
            </li>
            <li className="list-group-item footer-list">
              <a href="#home">Preguntas frecuentes</a>
            </li>
          </ul>
        </div>
        <div className="col-md-12 table-ftr copyr">
          <small>© 2022 Lumos SA todos los derechos reservados.</small>
        </div>
      </div>
    </div>
  );
}
export default Footer;