import ItemCount from "./ItemCount/ItemCount";
import "./ItemDetail.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../contex/cartContex";
import ItemInfo from "./ItemInfo/ItemInfo";

function ItemDetail(props) {
  const [isActive, setIsActive] = useState(true);

  const { addToCart } = useContext(CartContext);

  const onCart = (count) => {
    addToCart(props.productos, count);
  };

  return (
    <div>
      <div className="detailContainer">
        <h1 className="detail-h1">Detalles del producto</h1> <hr></hr>
        <div className="container">
          <div className="row">
            <div className="col-md-4 imgDetail">
              <div className="itemImg animated-box in">
                <img src={props.productos.img} alt={props.productos.nombre} />
              </div>
            </div>

            <div className="col-md-8 details">
              <h2>{props.productos.nombre}</h2>
              <p>Categoria: {props.productos.categoria}</p>
              <p className="text-center precio-ctn">
                <strong>${props.productos.precio}</strong>
              </p>

              <div className="itemCount-container">
                {isActive && (
                  <ItemCount
                    onCart={onCart}
                    precio={props.productos.precio}
                    setIsActive={setIsActive}
                    stock={props.productos.stock}
                    key={props.productos.id}
                  />
                )}

                {/* Lleva a '/cart'  */}
                {!isActive && (
                  <div>
                    <Link to={"/cart"}>
                      <p className="finish-btn">
                        <i className="fa-solid fa-cart-shopping"></i> Pagar
                      </p>
                    </Link>
                    <Link to={"/"}>
                      <p className="volver-btn">
                        <i className="fa-regular fa-circle-left"></i> Seguir
                        comprando
                      </p>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container product-detail">
        <ItemInfo productos={props.productos} />
      </div>
    </div>
  );
}

export default ItemDetail;
