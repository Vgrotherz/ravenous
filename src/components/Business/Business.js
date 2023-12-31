import React from 'react';
import './Business.css';

const Business = ({busnObjects}) => {
    return(
        <div className='businessBlock tv'>
            <a className='click_link' href={busnObjects.url} target="_blank" rel='noreferrer'>
                <div className='cut_img'>
                    <img src={busnObjects.imageSrc} alt='pic of a food' />
                </div>
                <h2>{busnObjects.name}</h2>
                <div className='left_right'>
                    <div className='adrss'>
                        <p>{busnObjects.address}</p>
                        <p>{busnObjects.city}</p>
                        <p>{busnObjects.state}</p>
                        <p>{busnObjects.zipCode}</p>
                    </div>
                    <div className='rate'>
                        <p className='rating'>Rating</p>
                        <p className='rating rating_numb'>{busnObjects.rating} <span>&#10030;</span></p>
                        <p className='review'>{busnObjects.reviewCount} reviews<span>&#10000;</span></p>
                    </div>
                </div>
            </a>
        </div>
    )
}
export default Business;