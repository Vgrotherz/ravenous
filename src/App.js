import React from "react";
import './App.css';

import BusinessesArr from "./components/FakeObj/FakeObj"; 
import SearchBar from "./components/SearchBar/SearchBar";
import BusinessList from "./components/BusinessList/BusinessList";


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