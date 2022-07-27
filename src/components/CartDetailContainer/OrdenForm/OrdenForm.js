import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../../../contex/cartContex";

function OrdenForm() {
  const { cart, getTotal } = useContext(CartContext);

  let precioTotal = getTotal().toFixed(2);

  const nuevaOrden = () => {
    let fecha = new Date();

    let fechaFormato = `${fecha.getDate()}/${
      fecha.getMonth() + 1
    }/${fecha.getFullYear()}`;

    let getTime = `${fecha.getHours()}:${fecha.getMinutes()}`;

    const orden = {
      comprador: {
        nombre: "Juan",
        email: "uno@goam.com",
        documento: "65456746",
        telefono: "12345678",
        ubicacion: {
          direccion: "calle falsa 123",
          provincia: "Buenos Aires",
          localidad: "CABA",
          codigoPostal: "5345",
        },
      },
      productos: cart.map((item) => ({
        nombre: item.item.nombre,
        precio: item.item.precio,
        cantidad: item.cant,
      })),
      fecha: fechaFormato,
      hora: getTime,
      total: precioTotal,
    };

    const db = getFirestore();

    const orderCollection = collection(db, "pedidos");

    addDoc(orderCollection, orden).then(({ id }) => {
      return console.log(`Orden creada con id: ${id}`);
    });

    console.log(orden);
  };
  nuevaOrden()
  return (
    <>
      <form onSubmit={() => 
        {nuevaOrden()}}>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label>Correo electronico</label>
            <input type="email" className="form-control" id="inputEmail4" />
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
            <label>Provincia</label>
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

        <button type="submit" className="submitOrder">
          Comprar{" "}
        </button>
      </form>
    </>
  );
}

export default OrdenForm;
