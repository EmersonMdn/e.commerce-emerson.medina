import CartDetail from "../CartDetail/CartDetail";
import "./CartDetailContainer.css";
import { CartContext } from "../../contex/cartContex";
import { useContext } from "react";

function CartDetailContainer() {
  const { clearCart } = useContext(CartContext);
  return (
    <>
      <div className="container cart-container">
        <div className="row">
          <div className="col-md-8 form-buyer-info">
            <form>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label for="inputEmail4">Correo electronico</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="inputAddress">Direccion</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Av. Siempre Viva #123"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputCity">Provincia</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-3">
                  <label for="inputZip">Codigo postal</label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
              </div>

              <div class="form-group">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    Acepto los terminos y condiciones
                  </label>
                </div>
              </div>

              <button className="submitOrder">Comprar</button>
            </form>
          </div>

          <div className="col-md-4 cartDetails">
            <CartDetail />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartDetailContainer;
