import React from 'react';
import './QandA.css';

const Search = ({onSearchChange}) => {

    return (
      <input
        type="text"
        placeholder="Have a question? Search for answers…"
        onChange={(e) => onSearchChange(e.target.value)}
        className="searchInput"
      />
    );
  }


export default Search;