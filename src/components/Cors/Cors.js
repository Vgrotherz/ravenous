import React from "react"; 
import "./Cors.css"; 
 
const Cors = () => { 
    const handleButtonClick = () => { 
      window.open('https://cors-anywhere.herokuapp.com/corsdemo', '_blank', 'width=600,height=200'); 
    }; 
   
    return ( 
        <div> 
            <button className="corsBtn" onClick={handleButtonClick}> 
                Click me first!
                <br></br>
                Yes! it is necessary! 
            </button> 
      </div> 
    ); 
  }; 
 
 
export default Cors;