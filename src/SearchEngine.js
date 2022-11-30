import React from "react";
import Footer from "./Footer";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="weatherAppWrapper">
      <div className="weatherApp">
        <div className="searchEngine">
          <form className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  autoComplete="off"
                  className="searchInput"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
          <h1> London </h1>
          <hr />
          <ul>
            <li>Last updated: 25.11.2022</li>
          </ul>
          <div className="row">
            <div className="col-sm-7">
              <img
                src="http://openweathermap.org/img/wn/04d@2x.png"
                alt="clear"
              />
              <strong className="temperature">17 </strong>
              <span className="units">℃ | F </span>
              <p className="description">partly cloudy</p>
            </div>
            <div className="col-sm-5">
              <ul>
                <li> Humidity: 80 %</li>
                <li>Wind Speed: 3 km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
