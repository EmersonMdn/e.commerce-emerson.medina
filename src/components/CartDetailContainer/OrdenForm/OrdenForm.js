import Swal from "sweetalert2";

import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../../contex/cartContex";

function OrdenForm() {
  const { cart, getTotal } = useContext(CartContext);

  const { nombre, setNombre } = useState("");
  const { documento, setDocumento } = useState(0);
  const { telefono, setTelefono } = useState(0);
  const { email, setEmail } = useState("");
  const { direccion, setDireccion } = useState("");
  const { provincia, setProvincia } = useState("");
  const { localidad, setLocalidad } = useState("");
  const { codigoPostal, setCP } = useState(0);

  let precioTotal = getTotal().toFixed(2);

  const nombreHandler = (e) => {
    setNombre(e.target.value);
  };
  const documentoHandler = (e) => {
    setDocumento(e.target.value);
  };
  const telefonoHandler = (e) => {
    setTelefono(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const direccionHandler = (e) => {
    setDireccion(e.target.value);
  };
  const provinciaHandler = (e) => {
    setProvincia(e.target.value);
  };
  const localidadHandler = (e) => {
    setLocalidad(e.target.value);
  };
  const cpHandler = (e) => {
    setCP(e.target.value);
  };

  const nuevaOrden = () => {
    let fecha = new Date();

    let fechaFormato = `${fecha.getDate()}/${
      fecha.getMonth() + 1
    }/${fecha.getFullYear()}`;

    let getTime = `${fecha.getHours()}:${fecha.getMinutes()}`;

    const orden = {
      comprador: {
        nombre: nombre,
        email: email,
        documento: documento,
        telefono: telefono,
        ubicacion: {
          direccion: direccion,
          provincia: provincia,
          localidad: localidad,
          codigoPostal: codigoPostal,
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
      Swal.fire("Orden realizada!", `Id del producto: ${id}`, "success");
    });
  };

  // nuevaOrden();
  return (
    <>
      <form onSubmit={nuevaOrden}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputNombre">Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={nombreHandler}
              className="form-control"
              id="inputNombre"
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputDocumento">Documento</label>
            <input
              type="number"
              value={documento}
              onChange={documentoHandler}
              className="form-control"
              id="inputDocumento"
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputTelefono">Telefono</label>
            <input
              type="number"
              value={telefono}
              onChange={telefonoHandler}
              className="form-control"
              id="inputTelefono"
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputEmail">Correo electronico</label>
            <input
              type="email"
              value={email}
              onChange={emailHandler}
              className="form-control"
              id="inputEmail"
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputDireccion">Direccion</label>
            <input
              type="text"
              value={direccion}
              onChange={direccionHandler}
              className="form-control"
              id="inputDireccion"
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputProvincia">Provincia</label>
            <input
              type="text"
              value={provincia}
              onChange={provinciaHandler}
              className="form-control"
              id="inputProvincia"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputLocalidad">Localidad</label>
            <input
              type="text"
              value={localidad}
              onChange={localidadHandler}
              className="form-control"
              id="inputLocalidad"
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="inputCP">Codigo postal</label>
            <input
              type="number"
              value={codigoPostal}
              onChange={cpHandler}
              className="form-control"
              id="inputCP"
            />
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
