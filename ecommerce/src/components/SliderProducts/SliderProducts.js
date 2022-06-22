import SlideShow from "./SlideShow/SlideShow";
import './SliderProducts.css'

function SliderProducts() {
    return ( 
        <div className='sliderMain'>
            <h4>Productos destacados</h4>
            <SlideShow />
        </div>
    );
}

export default SliderProducts;