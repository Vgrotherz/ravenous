import React from "react";
import './SearchBar.css';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };
  
const SearchBar = ({ searchTerm, location, sortingOption, onSearchTermChange, onLocationChange, onSortingOptionChange, onSearch }) => {
    // const [searchTerm, setSearchTerm] = useState('');
    // const [location, setLocation] = useState('');
    // const [sortingOption, setSortingOption] = useState('best_match');

    const handleSearchTerm = (event) => {
      onSearchTermChange(event.target.value);
    }

    const handleLocationChange = (event) => {
      onLocationChange(event.target.value);
    }

    const handleSortingOptionChange = (event) => {
      onSortingOptionChange(event);
    }

    // function handleSearch(event) {
    //   event.preventDefault();
    //   //console.log(`Searching Yelp with ${searchTerm}, ${location}, ${sortingOption}`);
    // }

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
          let sortByOptionValue = sortByOptions[sortByOption];
          return <li 
                  key={sortByOptionValue} 
                  onClick={() => {
                    handleSortingOptionChange(sortByOptionValue);
                  }}>
                    {sortByOption}
                </li>;
        });
      };
      
    return (
        <div className="search_container"> 
            <div className="search_head">
                <ul value={sortingOption} onChange={handleSortingOptionChange}>
                  {renderSortByOptions()}
                </ul>
            </div>
            <form action="https://api.yelp.com/v3/businesses/search" method="get" onSubmit={onSearch} className="search_only_container flex">
              <div className="search_only">
                  <input 
                    name="Search1" 
                    type="text" 
                    id="search1" 
                    value={searchTerm} 
                    onChange={handleSearchTerm} 
                    placeholder="Search Business"
                  /> 
                  <input 
                    name="Search2" 
                    type="text" 
                    id="search2" 
                    value={location} 
                    onChange={handleLocationChange} 
                    placeholder="Where?"
                  /> 
              </div>
              <button name="SearchSubmit" type="submit" className="search_btn">Go!</button>
            </form> 
        </div>);
}


export default SearchBar;