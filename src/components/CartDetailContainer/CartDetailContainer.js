import CartDetail from "../CartDetail/CartDetail";
import "./CartDetailContainer.css";
import { CartContext } from "../../contex/cartContex";
import { useContext } from "react";
import { Link } from "react-router-dom";

function CartDetailContainer() {
  const { clearCart } = useContext(CartContext);
  return (
    <>
      <div className="container cart-container">
        <div className="row">
          <div className="col-md-8 form-buyer-info">
            <form onSubmit={()=> alert('Compra finalizada')}>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label>Correo electronico</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Direccion</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Av. Siempre Viva #123"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label >Provincia</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-3">
                  <label>Codigo postal</label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
              </div>

              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label">
                    Acepto los terminos y condiciones
                  </label>
                </div>
              </div>

              <button type='submit' className="submitOrder" >Comprar</button>
            </form>
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
