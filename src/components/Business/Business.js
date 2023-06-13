import React from 'react';
import './Business.css';

function Business(props) {
    return(
        <div className='businessBlock'>
            <img src={props.imageSrc} alt='pic of a food' />
            <h2>{props.name}</h2>
            <div className='left_right'>
                <div className='adrss'>
                    <p>{props.address}</p>
                    <p>{props.city}</p>
                    <p>{props.state}</p>
                    <p>{props.zipCode}</p>
                </div>
                <div className='rate'>
                    <p>{props.category}</p>
                    <p>rating = {props.rating}</p>
                    <p>Review Count = {props.reviewCount}</p>
                </div>
            </div>

        </div>
    )
}
export default Business;