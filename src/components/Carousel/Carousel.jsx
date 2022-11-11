import React from 'react'
import './carousel.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import casapueblo from '../../assets/casapueblo.jpg'
import valizas from '../../assets/valizas.jpg'
import colonia from '../../assets/colonia.jpg'

function ImgCarousel() {
    return (
        <div name='carousel' className='container'>
            <Carousel className='carousel' transitionTime={200} showArrows={true} autoPlay={true} infiniteLoop={true} >
                <div>
                    <img src={casapueblo} alt='/' />
                    {/* <p className="legend">Maldives 1</p> */}
                </div>
                <div>
                    <img src={valizas} alt='/' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={colonia} alt='/' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>


    )
}

export default ImgCarousel;