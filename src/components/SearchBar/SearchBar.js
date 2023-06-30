import React, { useState } from "react";
import './SearchBar.css';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };
  
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortingOption, setSortingOption] = useState('best_match');

    const handleSearchTerm = (event) => {
      setSearchTerm(event.target.value);
    }

    const handleLocationChange = (event) => {
      setLocation(event.target.value);
    }

    const handleSortingOptionChange = (event) => {
      setSortingOption(event.target.value);
    }

    function handleSearchTest(event) {
      event.preventDefault();
      console.log(`Searching Yelp with ${searchTerm}, ${location}, ${sortingOption}`);
    }

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
          let sortByOptionValue = sortByOptions[sortByOption];
          return <li key={sortByOptionValue}>{sortByOption}</li>;
        });
      };
      
    return (
        <form action="//there must be url" method="get" onSubmit={handleSearchTest} className="search_container"> 
            <div className="search_head">
                <ul value={sortingOption} onChange={handleSortingOptionChange} >{renderSortByOptions()}</ul>
            </div>
            <div className="search_only_container flex">
              <div className="search_only">
                  <input name="Search1" type="text" id="search1" value={searchTerm} onChange={handleSearchTerm} placeholder="Search Business"/> 
                  <input name="Search2" type="text" id="search2" value={location} onChange={handleLocationChange} placeholder="Where?"/> 
              </div>
              <button name="SearchSubmit"  type="search" className="search_btn">Go!</button>
            </div> 
        </form>);
}


export default SearchBar;