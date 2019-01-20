import React from 'react';
import Slider from "react-slick";
import drone1 from '../../resources/images/drone1.jpg';
import drone2 from '../../resources/images/drone2.jpg';
import drone3 from '../../resources/images/drone3.jpg';

const Carousel = () => {
    
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 500
    }

    return (
        <div
            className='carousel_wrapper'
            style={{
                overflow: 'hidden',
                height:`${window.innerHeight}px`
            }}
        >

        <Slider {...settings}>
            <div>
                <div className='carrousel_image'
                    style={{
                        background:`url(${drone1})`,
                        height: `${window.innerHeight}px`
                    }}
                ></div>
            </div>
            <div>
            <div className='carrousel_image'
                    style={{
                        background:`url(${drone2})`,
                        height: `${window.innerHeight}px`
                    }}
                ></div>
            </div>
            <div>
            <div className='carrousel_image'
                    style={{
                        background:`url(${drone3})`,
                        height: `${window.innerHeight}px`
                    }}
                ></div>
            </div>
        </Slider>
            
        </div>
    );
};

export default Carousel;