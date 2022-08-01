import Swal from "sweetalert2";

import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../../contex/cartContex";

function OrdenForm() {
  const { cart, getTotal } = useContext(CartContext);

  const [inputNombre, setInputNombre] = useState("");
  const [inputdocumento, setDocumento] = useState("");
  const [inputTelefono, setTelefono] = useState("");
  const [inputEmail, setEmail] = useState("");
  const [inputDireccion, setDireccion] = useState("");
  const [inputProvincia, setProvincia] = useState("");
  const [inputLocalidad, setLocalidad] = useState("");
  const [inputCodigoPostal, setCP] = useState("");

  let precioTotal = getTotal().toFixed(2);

  const nombreHandler = (e) => {
    setInputNombre(e.target.value);
  };
  const documentoHandler = (event) => {
    setDocumento(event.target.value);
  };
  const telefonoHandler = (event) => {
    setTelefono(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const direccionHandler = (event) => {
    setDireccion(event.target.value);
  };
  const provinciaHandler = (event) => {
    setProvincia(event.target.value);
  };
  const localidadHandler = (event) => {
    setLocalidad(event.target.value);
  };
  const cpHandler = (event) => {
    setCP(event.target.value);
  };

  const nuevaOrden = (event) => {
    event.preventDefault();

    let fecha = new Date();

    let fechaFormato = `${fecha.getDate()}/${
      fecha.getMonth() + 1
    }/${fecha.getFullYear()}`;

    let getTime = `${fecha.getHours()}:${fecha.getMinutes()}`;

    const orden = {
      comprador: {
        nombre: inputNombre,
        email: inputEmail,
        documento: inputdocumento,
        telefono: inputTelefono,
        ubicacion: {
          direccion: inputDireccion,
          provincia: inputProvincia,
          localidad: inputLocalidad,
          codigoPostal: inputCodigoPostal,
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

    console.log(orden);

    const db = getFirestore();

    const orderCollection = collection(db, "pedidos");

    addDoc(orderCollection, orden).then(({ id }) => {
      Swal.fire("Orden realizada!", `Id del producto: ${id}`, "success");
    });
  };

  return (
    <>
      <form onSubmit={nuevaOrden}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputNombre">Nombre</label>
            <input
              type="text"
              onChange={nombreHandler}
              className="form-control"
              id="inputNombre"
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputDocumento">Documento</label>
            <input
              type="number"
              onChange={documentoHandler}
              className="form-control"
              id="inputDocumento"
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputTelefono">Telefono</label>
            <input
              type="number"
              onChange={telefonoHandler}
              className="form-control"
              id="inputTelefono"
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputEmail">Correo electronico</label>
            <input
              type="email"
              onChange={emailHandler}
              className="form-control"
              id="inputEmail"
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputDireccion">Direccion</label>
            <input
              type="text"
              onChange={direccionHandler}
              className="form-control"
              id="inputDireccion"
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputProvincia">Provincia</label>
            <input
              type="text"
              onChange={provinciaHandler}
              className="form-control"
              id="inputProvincia"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputLocalidad">Localidad</label>
            <input
              type="text"
              onChange={localidadHandler}
              className="form-control"
              id="inputLocalidad"
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="inputCP">Codigo postal</label>
            <input
              type="number"
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
          Comprar
        </button>
      </form>
    </>
  );
}

export default OrdenForm;
