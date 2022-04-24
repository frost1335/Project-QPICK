import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

import { BiCartAlt, BiHeart } from "react-icons/bi";
import { FiChevronDown, FiSmartphone } from "react-icons/fi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="container">
      <div className="Navbar">
        <div className="nav_left">
          <p className="nav_logo">QPICK</p>
          <div className="menu">
            <div
              className={`menu_back ${menu ? "open" : "close"}`}
              onClick={() => setMenu(!menu)}
            />
            <p className="menu_text" onClick={() => setMenu(!menu)}>
              <FiSmartphone className="phone" /> Выбрать модель телефона{" "}
              <FiChevronDown className="down" />
            </p>
            <ul className={`${menu ? "open" : "close"}`}>
              <li onClick={() => setMenu(!menu)}>
                <Link to="/">Apple</Link>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <Link to="/">Apple</Link>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <Link to="/">Apple</Link>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <Link to="/">Apple</Link>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <Link to="/">Apple</Link>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <Link to="/">Apple</Link>
              </li>
            </ul>
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
