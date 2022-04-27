import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

import { BiHeart, BiUser, BiCart } from "react-icons/bi";
import { ImStatsBars } from "react-icons/im";
import { VscThreeBars } from "react-icons/vsc";
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
                <span className="logo">olcha.uz</span>
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
                  <button>S</button>
                </form>
              </div>
              <div className="links">
                <li>
                  <Link to="/">
                    <BiUser />
                    Войти
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <ImStatsBars /> Сравнение
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <BiHeart /> Избранное
                  </Link>
                </li>
                <li>
                  <Link to="/">
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
