import "./TicketInfo.css";
function TicketInfo(props) {
  const { orden, id } = props;
  return (
    <>
      <div className="container ticket-info-container" key={id}>
        <div className="head-ticket">
          <h1>Lumos Shop</h1>
          <h4>La orden ha sido reservada</h4>
          <small>Por favor termine con el pago para confirmar la compra</small>
          <p>
            {orden.fecha} {orden.hora}
          </p>
          <p>Ticket id: #{id}</p>
        </div>
        <hr></hr>
        <h2 className="text-center">Ticket de compra</h2>
        <hr></hr>
        <div className="ticket-user">
          <p className="item_user-info">{orden.comprador.nombre}</p>
          <p className="item_user-info">{orden.comprador.documento}</p>
          <p className="item_user-info">{orden.comprador.email}</p>
          <p className="item_user-info">{orden.comprador.telefono}</p>
          <p className="item_user-info">
            {orden.comprador.ubicacion.direccion},{" "}
            {orden.comprador.ubicacion.localidad},{" "}
            {orden.comprador.ubicacion.provincia}
          </p>
          
        </div>
        <hr></hr>
        <div className="ticket-product">
          {orden.productos.map((item) => (
            <div className="product-item" key={item.id}>
              <table>
                <tbody>
                  <tr>
                    <td className="td-nombre">{item.nombre}</td>
                    <td className="td-precio">${item.precio}</td>
                    <td className="td-cant">{item.cantidad}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
        <div className="precioTotal">
          <p>Total: ${orden.total}</p>
        </div>
      </div>
    </>
  );
}

export default TicketInfo;
