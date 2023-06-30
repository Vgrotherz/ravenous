import React from "react";
import './App.css';

import BusinessesArr from "./components/FakeObj/FakeObj"; 
import SearchBar from "./components/SearchBar/SearchBar";
import BusinessList from "./components/BusinessList/BusinessList";


// moved on FakeObj component
// const businessObj = {
//     imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
//     name: 'MarginOtto Pizzeria',
//     address: '1010 Paddington Way',
//     city: 'Flavortown',
//     state: 'NY',
//     zipCode: '10101',
//     category: 'Italian',
//     rating: 4.5,
//     reviewCount: 90
// };

// const businesses = [businessObj, businessObj, businessObj, businessObj, businessObj];

const App = () => {
    return (
        <div className="body">
            <div className="rav">
                <h1>RAVENOUS</h1>
            </div>
            <div className="header flex">
                <SearchBar />
            </div>
            <div className="flex business_container">
                <BusinessList businesses={BusinessesArr} />
            </div>
        </div>
    )
}

export default App;