import React from "react";

function SearchIcon({styles = ''}) {
  return (
    <svg 
        className={styles}
        xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"
        id="EditableLine"
        >
        <circle cx="14" cy="14" r="9" fill="none" stroke="#000"></circle>
        <path fill="none" stroke="#000" d="M27 27L20.366 20.366"></path>
    </svg>
  );
}

export default SearchIcon;
