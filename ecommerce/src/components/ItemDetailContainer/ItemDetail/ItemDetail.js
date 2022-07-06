import './ItemDetail.css';


function ItemDetail(props) {
    console.log(props.productos.types)
    return ( 
    <div className="detailContainer">

        <h1 className='detail-h1'>Detalles del producto</h1> <hr></hr>

        <div className='container row'>

            <div className='col-md-3'>
                <div className='imgExample'>
                    <p>IMG</p>
                </div>
            </div>

            <div className='col-md-9 details'>        
                <h2>{props.productos.name}</h2>
                <h4>Habilidades: {props.productos.abilities.length}</h4>
                <p>Peso: {props.productos.weight}kg</p>
            </div>
        </div>
    </div> );
}

export default ItemDetail;