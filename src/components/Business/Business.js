import React from 'react';
import './Business.css';

const Business = ({busnObjects}) => {
    return(
        <div className='businessBlock tv'>
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
                    <p>{busnObjects.category}</p>
                    <p className='rating'>Rating</p>
                    <p className='rating'>{busnObjects.rating} <span>&#10030;</span></p>
                    <p className='review'>{busnObjects.reviewCount} <span>&#10000;</span> reviews</p>
                </div>
            </div>
        </div>
    )
}
export default Business;