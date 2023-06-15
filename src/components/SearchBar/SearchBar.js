import React from "react";
import './SearchBar.css';

function SearchBar() {
    return (
        <div className="search_container"> 
            <div>
                <p></p>
            </div>
            <div className="search_only">
                <input name="Search1" type="text" id="search1" placeholder="Search Business"/> 
                <input name="Search2" type="text" id="search2" placeholder="Where?"/> 
            </div>
            <button name="SearchSubmit" type="search" className="search_btn">Go!</button> 
        </div>);
}


export default SearchBar;