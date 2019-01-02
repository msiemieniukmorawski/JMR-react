import React from "react";

const Header = () => (
  <header className="container">
    <nav className="nav">
      <ul className="nav__container">
        <li className="nav__item">
          <span className="nav__item__link nav__item__link--hover">About</span>
        </li>
        <li className="nav__item">
          <span className="nav__item__link nav__item__link--hover">Offer</span>
        </li>
        <li className="nav__item nav__item__img">
          <span className="nav__item__link">
            <img
              src="images/logo.png"
              alt="logo"
              className="nav__item__link__logo"
            />
          </span>
        </li>
        <li className="nav__item">
          <span className="nav__item__link nav__item__link--hover">
            Gallery
          </span>
        </li>
        <li className="nav__item">
          <span className="nav__item__link nav__item__link--hover">
            Contact
          </span>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
