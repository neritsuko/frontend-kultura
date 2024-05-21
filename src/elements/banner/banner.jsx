import React from 'react'
import './banner.css'
import collage from '../products/collage.png'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-left'>
                <h2>Только самые актуальные товары</h2>
                <div>
                    <p>Всё для приятного досуга</p> 
                </div>
                <div className='banner-button'>
                    <a href="#best">Начать покупки</a>
                </div>
            </div>
            <div className="banner-right">
                <img src={collage} alt="" className='big-image'/>
                 

            </div>
        </div>
    )
}

export default Banner