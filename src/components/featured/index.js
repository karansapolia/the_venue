import React from 'react';
import Carousel from './Carousel';

const Featured = () => {
    return (
        <div style={{position:'relative'}}>
            <Carousel />
            <div className='artist_name'>
                <div className='wrapper'>
                    Kronos Inc
                </div>
            </div>
        </div>
    );
};

export default Featured;