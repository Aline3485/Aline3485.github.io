import React from 'react';
import Loupe from "../../src/assets/img/recherche.png";
function Search(props) {
    const {searchValue, setSearchValue} = props;
    return (
      <div>
        <input
          value={searchValue}
          type="text"
          placeholder="Type here..."
          onChange={event => setSearchValue(event.target.value)}
        /><img className="gif" src={Loupe} alt=""  />
      </div>
    );
  }

  export default Search;