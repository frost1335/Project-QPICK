import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

import { BiHeart, BiCart, BiComment } from "react-icons/bi";
import { VscThreeBars } from "react-icons/vsc";
import { MdSearch } from "react-icons/md";

import Catalog from "../Catalog/Catalog";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="nav_back">
      <div className="Navbar">
        <div className="navTop">
          <div className="container">
            <div className="nav_top">
              <div className="top_left">
                <Link className="logo" to="/">
                  style.uz
                </Link>
              </div>
              <div className="top_right">
                <ul className="menu">
                  <li>
                    <Link to="/">Помощь</Link>
                  </li>
                  <li>
                    <p>
                      <a href="tel:+998712022021">+998 (71) 202 2021</a>
                    </p>
                  </li>
                  <li>
                    <button>Запросить звонок</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navBottom">
          <div className="container">
            <div className="nav_bottom">
              <div className="menu">
                <button onClick={() => setMenu(!menu)}>
                  Каталог <VscThreeBars />
                </button>
                <div
                  className={`catalog_back ${menu ? "open" : "closed"}`}
                  onClick={() => setMenu(!menu)}
                />
                <Catalog menu={menu} />
              </div>
              <div className="search">
                <form action="">
                  <input type="text" placeholder="Поиск товаров..." />
                  <button>
                    <MdSearch />
                  </button>
                </form>
              </div>
              <div className="links">
                <li>
                  <Link to="/votes">
                    <BiComment /> Отзывы
                  </Link>
                </li>
                <li>
                  <Link to="/favorites">
                    <BiHeart /> Избранное
                  </Link>
                </li>
                <li>
                  <Link to="/cart">
                    <BiCart /> Корзина
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
