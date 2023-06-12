import React from "react";
import Business from "../Business/Business";

function Card(props) {
    return (
        <div>
            <Business profileImg={props.commObj.imageSrc} name={props.commObj.name} />
        </div>
    );
}

export default Card;