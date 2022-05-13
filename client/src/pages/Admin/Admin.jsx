import React from "react";
import { Link } from "react-router-dom";

import "./Admin.scss";

const Admin = (props) => {
  return (
    <div className="Admin">
      <div className="admin_navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
      <div className="admin_menu">
        <ul className="menu">
          <li className="menu_item">
            <Link to={"/admin/product/control"}>Product</Link>
          </li>
          <li className="menu_item">
            <Link to={"/admin/category/control"}>Category</Link>
          </li>
          <li className="menu_item">
            <Link to={"/admin/shop/control"}>Shop</Link>
          </li>
          <li className="menu_item">
            <Link to={"/admin/brand/control"}>Brand</Link>
          </li>
          <li className="menu_item">
            <Link to={"/admin/admin/control"}>Admin</Link>
          </li>
          <li className="menu_item">
            <Link to={"/admin/control/"}>asd</Link>
          </li>
        </ul>
      </div>
      <div className="admin_body">{props.children}</div>
    </div>
  );
};

export default Admin;
