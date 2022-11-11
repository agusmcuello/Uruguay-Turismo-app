import React from 'react'
import './selects.css'
import cabo from '../../assets/cabo.jpg'
import valizas from '../../assets/valizas.jpg'
import colonia from '../../assets/colonia.jpg'
import pdd from '../../assets/pdd.jpg'
import uruguay from '../../assets/uruguay.jpg'
import casapueblo from '../../assets/casapueblo.jpg'
import SelectsImg from '../SelectsImg/SelectImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={cabo} text='Cabo Polonio' />
                <SelectsImg bgImg={valizas} text='Valizas' />
                <SelectsImg bgImg={colonia} text='Colonia del Sacramento' />
                <SelectsImg bgImg={pdd} text='Punta del Este' />
                <SelectsImg bgImg={uruguay} text='Montevideo' />
                <SelectsImg bgImg={casapueblo} text='Casa Pueblo' />
            </div>

        </div>
    )
}

export default Selects