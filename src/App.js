import React, { useState } from "react";
import './App.css';

import SearchBar from "./components/SearchBar/SearchBar";
import BusinessList from "./components/BusinessList/BusinessList";
import getBusinessListings from "./utils/Yelp";
import Cors from "./components/Cors/Cors";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortingOption, setSortingOption] = useState("best_match");
  const [businesses, setBusinesses] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    getBusinessListings(searchTerm, location, sortingOption)
      .then((businesses) => {
        setBusinesses(businesses);
      })
      .catch((error) => {
        console.error(error);
      });
  };


    return (
        <div className="body">
            <div className="rav">
                <h1>RAVENOUS</h1>
            </div>
            <div className="header flex">
                <Cors />
                <SearchBar 
                  searchTerm={searchTerm}
                  location={location}
                  sortingOption={sortingOption}
                  onSearchTermChange={setSearchTerm}
                  onLocationChange={setLocation}
                  onSortingOptionChange={setSortingOption}
                  onSearch={handleSearch}
                  />
            </div>
            <div className="flex business_container">
                <BusinessList businesses={businesses} />
            </div>
        </div>
    )
}

export default App;