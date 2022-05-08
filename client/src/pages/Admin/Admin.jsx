import React from "react";
import { Link } from "react-router-dom";

import "./Admin.scss";

const Admin = () => {
  return (
    <div className="Admin">
      <div className="admin_menu">
        <ul className="menu">
          <li className="menu_item">
            <Link to={"/asd"}>asd</Link>
          </li>
        </ul>
      </div>
      <div className="admin_body"></div>
    </div>
  );
};

export default Admin;
