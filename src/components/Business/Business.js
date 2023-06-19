import React from 'react';
import './Business.css';

const fake = 
    {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
    };


const Business = () => {
    return(
        <div className='businessBlock'>
            <div className='cut_img'>
                <img src={fake.imageSrc} alt='pic of a food' />
            </div>
            <h2>{fake.name}</h2>
            <div className='left_right'>
                <div className='adrss'>
                    <p>{fake.address}</p>
                    <p>{fake.city}</p>
                    <p>{fake.state}</p>
                    <p>{fake.zipCode}</p>
                </div>
                <div className='rate'>
                    <p>{fake.category}</p>
                    <p>rating = {fake.rating}</p>
                    <p>Review Count = {fake.reviewCount}</p>
                </div>
            </div>

        </div>
    )
}
export default Business;