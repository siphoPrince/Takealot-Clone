import React from "react";
import "./Search.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <div className="search__container">
      <div className="search__dropdown">
        <button>
          Shop by Department{" "}
          <FontAwesomeIcon icon={faCaretDown} className="icon__drop" />
        </button>
      </div>

      <div className="search__container">
        <div className="search__input">
          <input type="text" placeholder="Search for products, brands..." />
        </div>

        <div className="search__categories">
          <ul>
            <button>ALOT for Less</button>
            <button>Winter</button>
            <button>New to Takealot</button>
            <button>Deals & Promotion</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Search;
