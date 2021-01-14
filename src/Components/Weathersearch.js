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
        <div className="weather-search__submit">
          <button className="weather-search__button">&rarr;</button>
        </div>
      </form>
    </div>
  );
}

export default Weathersearch;
