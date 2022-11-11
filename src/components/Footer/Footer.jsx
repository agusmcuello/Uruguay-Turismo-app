import React from 'react'
import './footer.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>BEACHES.</h3>
                    <div className="social">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>Sobre nosotros</li>
                            <li>Afiliaciones</li>
                            <li>Carreras</li>
                            <li>Noticias</li>
                            <li>Auspiciantes</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Contacto</li>
                            <li>Términos</li>
                            <li>Política</li>
                            <li>Privacidad</li>
                            <li>Precios</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer