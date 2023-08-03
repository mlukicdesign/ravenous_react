import React from "react";

function SearchBar() {
  return (
    <div>
      <div className="Filters">
        <button id="best_match">Best Match</button>
        <button id="highestRated">Highest Rated</button>
        <button id="mostReviews">Most Reviewed</button>
      </div>
      <h2>Search Businesses</h2>
      <input placeholder="Search Businesses" />
      <input placeholder="Where?"/>
      <button>Let's Go</button>
    </div>
  );
}

export default SearchBar;
