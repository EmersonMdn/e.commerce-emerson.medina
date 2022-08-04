import ItemCount from "./ItemCount/ItemCount";
import "./ItemDetail.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../contex/cartContex";

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
              <p className='text-center precio-ctn'><strong>${props.productos.precio}</strong></p>

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
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like). Where
          does it come from? Contrary to popular belief, Lorem Ipsum is not
          simply random text.
        </p>
      </div>
    </div>
  );
}

export default ItemDetail;
