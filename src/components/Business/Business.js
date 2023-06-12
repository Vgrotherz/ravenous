import React from 'react';

function Business(props) {
    return(
        <div>
            <img src={props.imageSrc} alt='pic of a food' />
            <h1>{props.name}</h1>
        </div>
    )
}

export default Business;