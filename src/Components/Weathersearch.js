import React,{useContext} from "react";
import Context from "../Context.js"
function Weathersearch() {
  const {api_call}=useContext(Context)
  return (
    <div className="weather-search">
      <form className="weather-search__form" onSubmit={api_call}>
        <input
          type="text"
          className="weather-search__input"
          autoComplete="off"
          name="location"
        />
        
          <button type="submit" className="weather-search__button">&rarr;</button>
        
      </form>
    </div>
  );
}

export default Weathersearch;
