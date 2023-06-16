import React from "react";
import './SearchBar.css';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };
  
const SearchBar = () => {
    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
          let sortByOptionValue = sortByOptions[sortByOption];
          return <li key={sortByOptionValue}>{sortByOption}</li>;
        });
      };
      
    return (
        <div className="search_container"> 
            <div className="search_head">
                <ul>{renderSortByOptions()}</ul>
            </div>
            <div className="search_only_container flex">
              <div className="search_only">
                  <input name="Search1" type="text" id="search1" placeholder="Search Business"/> 
                  <input name="Search2" type="text" id="search2" placeholder="Where?"/> 
              </div>
              <button name="SearchSubmit" type="search" className="search_btn">Go!</button>
            </div> 
        </div>);
}


export default SearchBar;