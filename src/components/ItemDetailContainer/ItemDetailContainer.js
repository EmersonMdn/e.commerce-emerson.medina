import ItemDetail from "./ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getFirestore, getDoc } from "firebase/firestore";

function ItemDetailContainer() {
  const [item, setItem] = useState([]);

  const { productId } = useParams();

  const db = getFirestore();

  const getProduct = async (id) => {
    const productCollectionRef = collection(db, "productos");
    const docRef = doc(productCollectionRef, id);

    const docSnap = await getDoc(docRef);

    return docSnap.data();
  };

  useEffect(() => {
    getProduct(productId).then((data) => {
      setItem(data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return (
    <>
      <p className="text-center bg-primary">
        10% off pagando con efectivo +10% off o un regalito en el mes de tu
        cumple
      </p>
      <ItemDetail productos={item} />
    </>
  );
}

export default ItemDetailContainer;
