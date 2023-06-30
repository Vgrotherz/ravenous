import React from "react";
import Business from "../Business/Business";


const BusinessList = ({businesses}) => {
    const businessArr = businesses.map(busObj => 
    <Business busnObjects={busObj} />)
    return (
        <div className="flex business_container">
            {businessArr}
        </div>
        )
    };

export default BusinessList;