import React, { useState } from "react"; 
import './SearchBar.css'; 
 
const sortByOptions = { 
    "Best Match": "best_match", 
    "Highest Rated": "rating", 
    "Most Reviewed": "review_count", 
  }; 
   
const SearchBar = ({ searchTerm, location, sortingOption, onSearchTermChange, onLocationChange, onSortingOptionChange, onSearch }) => {  
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
                    placeholder="Search Business/ example - Pizza/Taco/Chinese" 
                  />  
                  <input  
                    name="Search2"  
                    type="text"  
                    id="search2"  
                    value={location}  
                    onChange={handleLocationChange}  
                    placeholder="In which US State?" 
                  />  
              </div> 
              <button name="SearchSubmit" type="submit" className="search_btn">Search!</button> 
            </form>  
        </div>); 
} 
 
 
export default SearchBar;