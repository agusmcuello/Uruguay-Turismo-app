import React from 'react'
import './destinations.css'
import cabo from '../../assets/cabo.jpg'
import valizas from '../../assets/valizas.jpg'
import colonia from '../../assets/colonia.jpg'
import pdd from '../../assets/pdd.jpg'
import casapueblo from '../../assets/casapueblo.jpg'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>Conoce las playas uruguayas</h1>
                <p>Tu destino se encuentra a la vuelta de la esquina</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={cabo} alt="/"/>
                    <img src={valizas} alt="/"/>
                    <img src={colonia} alt="/"/>
                    <img src={pdd} alt="/"/>
                    <img src={casapueblo} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations