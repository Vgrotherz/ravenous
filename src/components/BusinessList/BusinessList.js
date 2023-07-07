import React, { useState, useEffect} from "react";
import Business from "../Business/Business";


// const BusinessList = ({businesses}) => {
//     const businessArr = businesses.map(busObj => 
//     <Business busnObjects={busObj} />)
//     return (
//         <div className="flex business_container">
//             {businessArr}
//         </div>
//         )
//     };

import getBusinessListings from "../../utils/Yelp";

const BusinessList = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    // Call the getBusinessListings function when the component mounts
    getBusinessListings('pizza', 'New York', 'review_count')
      .then(businesses => {
        setBusinesses(businesses);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const businessArr = businesses.map(busObj => (
    <Business key={busObj.name} busnObjects={busObj} />
  ));

  return (
    <div className="flex business_container">
      {businessArr}
    </div>
    )
};

export default BusinessList;
