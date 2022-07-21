import './Footer.css';



function Footer() {
    return ( 
    <div className='footer-container container-fluid'>
        <div className='row'>
            <div className='col-md-4 table-ftr table-izq'>
                Redes sociales
                <ul className='list-group'>
                    <li className='list-group-item footer-list'><a href='#home'>Facebook</a></li>
                    <li className='list-group-item footer-list'><a href='#home'>Facebook</a></li>
                    <li className='list-group-item footer-list'><a href='#home'>Facebook</a></li>
                    <li className='list-group-item footer-list'><a href='#home'>Facebook</a></li>
                </ul>
            </div>

            <div className='col-md-4 table-ftr table-mid'>Index</div>

            <div className='col-md-4 table-ftr table-der'>Mas</div>
            <div className='col-md-12 table-ftr'>Mas</div>
        </div>
    </div> );
}
export default Footer;