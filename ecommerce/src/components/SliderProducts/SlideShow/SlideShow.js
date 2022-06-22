import React, {useRef, useEffect} from 'react';
import './SlideShow.css';
import img1 from './../../../assets/img/assetsss/1.jpg';
import img2 from './../../../assets/img/assetsss/2.jpg';
import img3 from './../../../assets/img/assetsss/3.jpg';
import img4 from './../../../assets/img/assetsss/4.jpg';


function SlideShow() {
    const slideShow = useRef(null);
    const intervaloSlide = useRef(null);

    const siguiente = () => {
        //Comprobamos que ek slideshow tenga elementos
        if(slideShow.current.children.length > 0){
            //Primer elemento
            const primerElemento = slideShow.current.children[0];
            slideShow.current.style.transition = `400ms ease-out all`;

            const tamañoSlide = slideShow.current.children[0].offsetWidth;

            slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            const transicion = () => {
                slideShow.current.style.transition = 'none';
                slideShow.current.style.transform = `translateX(0)`;

                slideShow.current.appendChild(primerElemento);

                slideShow.current.removeEventListener('transitionend', transicion);
            }

            slideShow.current.addEventListener('transitionend', transicion)
            
        }
    }

    const anterior = () => {
        if(slideShow.current.children.length > 0) {
            const index = slideShow.current.children.length - 1;
            const ultimoElemento = slideShow.current.children[index];
            slideShow.current.insertBefore(ultimoElemento, slideShow.current.firstChild);

            slideShow.current.style.transition = 'none';

            const tamañoSlide = slideShow.current.children[0].offsetWidth;

            slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            setTimeout(()=>{
                slideShow.current.style.transition = '300ms ease-out all';
                slideShow.current.style.transform = `translateX(0)`;
            }, 30)
        }
    }

//    useEffect(()=>{
//     intervaloSlide.current = setInterval(()=>{
//         siguiente();
//     }, 5000);

//     slideShow.current.addEventListener('mouseenter', ()=>{
//         clearInterval(intervaloSlide.current);
//     })

//     slideShow.current.addEventListener('mouseleave', ()=>{
//         intervaloSlide.current = setInterval(()=>{
//             siguiente();
//         }, 5000);
//     })

//    }, [])

    return ( 
    <div className='MainContainer'>
        <div className='SliderContainer'ref={slideShow}>
            <div className='slider'>
                <a href='facebook.com'>
                    <img src={img1} alt='' />
                </a>
                <p>Producto</p>
            </div>

            <div className='slider'>
                <a href='facebook.com'>
                    <img src={img2} alt='' />
                </a>
                <p>Producto</p>
            </div>

            <div className='slider'>
                <a href='facebook.com'>
                    <img src={img3} alt='' />
                </a>
                <p>Producto</p>
            </div>

            <div className='slider'>
                <a href='facebook.com'>
                    <img src={img4} alt='' />
                </a>
                <p>Producto</p>
            </div>
        </div>

        <div className='controls'>
            <button className='btn-izq' onClick={anterior}><i className="fa-solid fa-angle-left"></i></button>
            <button className='btn-der' onClick={siguiente}><i className="fa-solid fa-angle-right"></i></button>
        </div>
    </div> );
}

export default SlideShow;