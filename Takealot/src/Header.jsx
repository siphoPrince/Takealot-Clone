import React from "react";
import Search from "./Search.jsx";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <nav className="nav__header">
        <Link to="/" className="nav__logo">
          <img
            src="https://www.takealot.com/static/images/logo_transparent.png"
            alt="logo"
          />
        </Link>

        <ul className="nav__HelpSell">
          <li>Help Centre</li>
          <div className="line"></div>
          <li>Sell On Takealot</li>
        </ul>

        <ul className="nav__LoginRegister">
          <Link to="#" className="Links">
            <li>Login</li>
          </Link>
          <div className="line"></div>
          <Link to="#" className="Links">
            <li>Register</li>
          </Link>
          <div className="line"></div>
          <Link to="#" className="Links">
            <li>Orders</li>
          </Link>
          <div className="line"></div>
          <div className="nav__account">
            <span>
              My Account{" "}
              <FontAwesomeIcon icon={faCaretDown} className="icon__drop" />
            </span>
          </div>
        </ul>
        <div className="wishlis">
          <button>
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>

        <div className="cart__button">
          <button>
            <FontAwesomeIcon icon={faCartShopping} />
            <div className="cart__count">0</div>
          </button>
        </div>
      </nav>

      <Search />
    </>
  );
}

export default Header;
