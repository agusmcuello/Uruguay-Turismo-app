import React from 'react'
import './hero.css'
import {AiOutlineSearch} from 'react-icons/ai'
import Video from '../../assets/video.mp4'

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>Conoce Uruguay</h1>
                <h2>Toda la información sobre el turimo charrúa</h2>
                <form className="form">
                    <div>
                        <input type="text" placeholder='Busca tu destino' />
                    </div>
                    <div>
                        <button className='search-button'><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero