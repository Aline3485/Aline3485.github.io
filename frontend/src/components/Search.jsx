import React from "react";
import Loupe from "@assets/image/recherche.png";
import "@pages/evenement/event.css";
function Search(props) {
  const { searchValue, setSearchValue } = props;
  return (
    <div className="event-containerevent">
      <input className="searchevent"
        value={searchValue}
        type="text"
        placeholder="Type here..."
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <img className="gif" src={Loupe} alt="" />
    </div>
  );
}

export default Search;
