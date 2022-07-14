import React from "react";
import { CartIcon } from "../../assets/icons/CartIcon";
import "./Header.css";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <header className="header-wrapper">
      <div className="header flex">
        <Link to="/">
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fk-logo_f64bb3.png"
            alt="logo"
            width={50}
          />
        </Link>

        <div className="searchbar-wrapper flex">
          <input type="text" placeholder="search" className="searchbar" />
          <button className="search-icon flex">
            <svg
              width="10"
              height="10"
              viewBox="0 0 17 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#2874F1" fill-rule="evenodd">
                <path
                  class="_34RNph"
                  d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
                ></path>
                <path
                  class="_34RNph"
                  d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        <div className="flex">
          <button className="btn btn-login">login</button>
          <button className="btn btn-link">become a seller</button>
          <button className="btn btn-link">more</button>
          <Link to="/cart">
            <button className="btn btn-link flex">
              <CartIcon />
              cart
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
