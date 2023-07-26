import React, { useState } from "react"; 
import './SearchBar.css'; 
 
const sortByOptions = { 
    "Best Match": "best_match", 
    "Highest Rated": "rating", 
    "Most Reviewed": "review_count", 
  }; 
   
const SearchBar = ({ searchTerm, location, sortingOption, onSearchTermChange, onLocationChange, onSortingOptionChange, onSearch, onClear }) => {  
    const [selectedOption, setSelectedOption] = useState(sortingOption); 
 
    const handleSearchTerm = (event) => { 
      onSearchTermChange(event.target.value); 
    } 
 
    const handleLocationChange = (event) => { 
      onLocationChange(event.target.value); 
    } 
 
    const handleSortingOptionChange = (event) => { 
      const selectedValue = event.target.getAttribute("data-value"); 
      setSelectedOption(selectedValue); 
      onSortingOptionChange(selectedValue); 
    } 
 
    const renderSortByOptions = () => { 
        return Object.keys(sortByOptions).map((sortByOption) => { 
          let sortByOptionValue = sortByOptions[sortByOption]; 
          // isSelected func for css color
          const isSelected = sortByOptionValue === selectedOption; 
          return <li  
          key={sortByOptionValue} 
          onClick={handleSortingOptionChange} 
          data-value={sortByOptionValue} 
          className={isSelected ? "selected" : ""}> 
                    {sortByOption} 
                </li>; 
        }); 
      }; 
      
      // const check_input = (event) => {
      //   let key = event.keyCode;
      //   return ((key >= 65 && key <= 90) || (key >= 97 && key <= 122) || key == 8);
      // };

    return ( 
        <div className="search_container">  
            <div className="search_head"> 
                <ul value={sortingOption} onChange={handleSortingOptionChange}> 
                  {renderSortByOptions()} 
                </ul> 
            </div> 
            <form  onSubmit={onSearch} className="search_only_container flex"> 
              <div className="search_only"> 
                  <input  
                    name="Search1"  
                    type="text"  
                    id="search1"  
                    value={searchTerm}  
                    onChange={handleSearchTerm}  
                    placeholder="Search Business/example - Pizza/Taco/Chinese"
                    required 
                  />  
                  <input  
                    name="Search2"  
                    type="text"  
                    id="search2"  
                    value={location}  
                    onChange={handleLocationChange}  
                    placeholder="Where"
                    required
                  />  
              </div> 
              <button name="SearchSubmit" type="submit" className="search_btn">Search!</button>   
            </form>
            <button name="ClearBtn" className="search_btn" onClick={onClear}>Clear results</button>
        </div>); 
} 
 
 
export default SearchBar;