import "./ItemListContainer.css";
import ItemList from "./ItemList/ItemList";
import React, { useEffect, useState } from "react";
import SliderProducts from "../SliderProducts/SliderProducts";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function ItemListContainer({ greeting }) {
  const [itemValue, setItem] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const { idCategoria } = useParams();

  const db = getFirestore();

  const getProducts = async () => {
    setIsActive(true);
    const productRef = collection(db, "productos");
    const docSnap = await getDocs(productRef);

    const dataProducts = docSnap.docs.map((producto) => {
      const items = { ...producto.data(), id: producto.id };
      return items;
    });
    return dataProducts;
  };

  useEffect(() => {
    getProducts()
      .then((data) => {
        setItem(
          idCategoria
            ? data.filter((item) => item.categoria === idCategoria)
            : data
        );
        setIsActive(false);
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => {
          setIsActive(false);
        },5000);
      });
  }, [idCategoria]);

  return (
    <>
      <div className="container-slide">
        <SliderProducts />
      </div>
      <div className="container" id="ItemListContainer">
        <h3>{greeting}</h3>
        {isActive && (
          <div className="spinner-border" role="status">
            <span className="sr-only items-loader">Loading...</span>
          </div>
        )}
        <ItemList productos={itemValue} />
      </div>
    </>
  );
}

export default ItemListContainer;
