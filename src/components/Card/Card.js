import React from "react";
import Business from "../Business/Business";

function Card(props) {
    return (
        <div>
            <Business 
                profileImg={props.commObj.imageSrc} 
                name={props.commObj.name} 
                address={props.commObj.address}
                city={props.commObj.city}
                state={props.commObj.state}
                zipCode={props.commObj.zipCode}
                category={props.commObj.category}
                rating={props.commObj.rating}
                reviewCount={props.commObj.reviewCount} />
        </div>
    );
}



export default Card;
