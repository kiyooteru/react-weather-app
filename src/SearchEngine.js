import React from "react";

export default function SearchEngine() {
  return (
    <div className="weather app">
      <div className="searchEngine">
        <form className="mb-3">
          <div className="row">
            <div className="col-sm-9">
              <input
                type="search"
                placeholder="Enter a city..."
                autoComplete="off"
              />
            </div>
            <div className="col-sm-3">
              <input type="submit" value="Search" />
            </div>
          </div>
        </form>
        <h1> City </h1>
        <hr />
        <ul>
          <li>Last updated:</li>
        </ul>
        <div className="row">
          <div className="col-sm-7">
            <img src="" alt="clear" />
            <strong className="temperature">17 </strong>
            <span className="units">℃</span>
            <p className="description">partly cloudy</p>
          </div>
          <div className="col-sm-5">
            <ul>
              <li> Humidity:</li>
              <li>Wind Speed:</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
