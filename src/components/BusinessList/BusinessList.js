import React from "react";
import Business from "../Business/Business";


const BusinessList = ({businesses}) => {
    const businessArr = businesses.map((busObj) => (
    <Business key={busObj.id} busnObjects={busObj} />
    ));    

    return (
        <div className="flex business_container">
            {businessArr}
        </div>
        )
    };

export default BusinessList;
