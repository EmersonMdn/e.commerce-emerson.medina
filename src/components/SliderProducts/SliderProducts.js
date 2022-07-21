import SlideShow from "./SlideShow/SlideShow";
import './SliderProducts.css'

function SliderProducts() {
    return ( 
        <div className='sliderMain'>
            <h3>Productos destacados</h3>
            <SlideShow />
        </div>
    );
}

export default SliderProducts;