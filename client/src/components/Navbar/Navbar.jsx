import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

import { BiCartAlt, BiHeart } from "react-icons/bi";
import { FiChevronDown, FiSmartphone } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="container">
      <div className="Navbar">
        <div className="nav_left">
          <p className="nav_logo">QPICK</p>
          <div className="menu">
            <p className="menu_text">
              <FiSmartphone className="phone" /> Выбрать модель телефона{" "}
              <FiChevronDown className="down" />
            </p>
            {/* <ul>
              <li>Apple</li>
              <li>Apple</li>
              <li>Apple</li>
              <li>Apple</li>
              <li>Apple</li>
            </ul> */}
          </div>
        </div>
        <div className="nav_right">
          <Link to="/">
            <BiCartAlt />
          </Link>
          <Link to="/">
            <BiHeart />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
