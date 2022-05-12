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
            <Link to={"/admin/control/product"}>Product</Link>
          </li>
          <li className="menu_item">
            <Link to={"/admin/control/category"}>Category</Link>
          </li>
          <li className="menu_item">  
            <Link to={"/admin/control/shop"}>Shop</Link>
          </li>
          <li className="menu_item">
            <Link to={"/admin/control/brand"}>Brand</Link>
          </li>
          <li className="menu_item">
            <Link to={"/admin/control/admin"}>Admin</Link>
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
