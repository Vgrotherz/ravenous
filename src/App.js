import React from "react";
import './App.css';

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
                <BusinessList />
            </div>
        </div>
    )
}

export default App;