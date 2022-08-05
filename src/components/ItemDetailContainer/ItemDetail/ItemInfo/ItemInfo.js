import { Link } from "react-router-dom";
import "./ItemInfo.css";

function ItemInfo() {
  return (
    <>
      <div className="itemInfo">
        <div className="itemInfo-img">
          <img
            src="https://www.todocompu.com/wcsstore/TodocompuStorefrontAssetStore/images/catalog/product/placeholder/default_500x500.jpg"
            alt=""
          ></img>
        </div>
        <div className="itemInfo-details">
          <h2>Producto</h2>
          <p>Categoria: Lorem ipsum</p>
          <p>
            Descripcion: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quidem.
          </p>
          <div className="itemCount-container">
            <Link to={"/"}>
              <p className="volver-btn">
                <i className="fa-regular fa-circle-left"></i> Seguir comprando
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemInfo;
