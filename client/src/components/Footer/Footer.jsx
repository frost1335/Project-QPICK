import React from "react";
import { MdLanguage } from "react-icons/md";
import {
  RiWhatsappLine,
  RiInstagramLine,
  RiTelegramLine,
  RiFacebookCircleLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footerTop">
        <div className="container">
          <div className="footer_top">
            <div className="footer_logo">
              <Link className="logo" to="/">
                style.uz
              </Link>
            </div>
            <div className="footer_links">
              <ul>
                <li>
                  <Link to="/">Избранное</Link>
                </li>
                <li>
                  <Link to="/">Избранное</Link>
                </li>
                <li>
                  <Link to="/">Избранное</Link>
                </li>
              </ul>
            </div>
            <div className="footer_service">
              <p>Условия сервиса</p>
              <div className="icon">
                <MdLanguage className="lang" />
                <span>Каз</span>
                <span>Рус</span>
                <span>Eng</span>
              </div>
            </div>
            <div className="footer_social">
              <div className="icons">
                <Link to="/">
                  <RiFacebookCircleLine />
                </Link>
                <Link to="/">
                  <RiInstagramLine />
                </Link>
                <Link to="/">
                  <RiTelegramLine />
                </Link>
                <Link to="/">
                  <RiWhatsappLine />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="container">
          <div className="footer_bottom">
            <div className="bottom_left">
              <p>© 2017-2022. ООО "Olcha store"</p>
            </div>
            <div className="bottom_right">
              <Link to="/">Оферта</Link>
              <Link to="/">Политика конфиденциальности</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
