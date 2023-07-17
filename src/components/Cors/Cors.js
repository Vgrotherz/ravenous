import React from "react";
import "./Cors.css";

const Cors = () => {
    const handleButtonClick = () => {
      window.open('https://cors-anywhere.herokuapp.com/corsdemo', '_blank', 'width=600,height=400');
    };
  
    return (
        <div className="corsBtn">
            <button onClick={handleButtonClick}>
                Go to another site
            </button>
      </div>
    );
  };


export default Cors;