import './panel.css'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../img/pexels-veeterzy-38136.jpg'
import img2 from '../img/pexels-pixabay-268533.jpg'
import img3 from '../img/pexels-pixabay-36762.jpg'
import img4 from '../img/pexels-bess-hamiti-36487.jpg'
import img5 from '../img/pexels-tobi-675764.jpg'


const Panel = () => {
    return (
        <section className='sec2'>
            <div className='cr'>
                <Carousel>
                    <div>
                        <img src={img1} />
                        <p className="legend">Legend 1</p>
                    </div>
                </Carousel>
            </div>
        </section>
    )
}

export default Panel;
