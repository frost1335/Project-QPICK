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
    <div className="container">
      <div className="Footer">
        <div className="footer_logo">
          <p className="logo">QPICK</p>
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
  );
};

export default Footer;
