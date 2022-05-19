import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Admin.scss";

const Admin = (props) => {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("authData")) {
      navigate("/admin/auth");
    }

    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("authData"),
        },
      };

      try {
        const { data } = await axios.get("/api/admin/control", config);

        props.setAdminData(data.data);
      } catch (error) {
        localStorage.removeItem("authData");
        setError("You are not authorized, please login");
        navigate("/admin/auth");
      }
    };

    fetchPrivateData();
  }, [navigate]);

  const logoutHandler = () => {
    localStorage.removeItem("authData");
    navigate("/admin/auth");
  };

  return (
    <div className="Admin">
      <div className="admin_navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <button to="/logout" onClick={logoutHandler}>
              Logout
            </button>
          </li>
        </ul>
        <div className="admin_corner">
          <span>{props.adminData.name}</span>
          <p>{props.adminData.email}</p>
        </div>
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
          {props.adminData.status === 'owner' ? (
            <li className="menu_item">
              <Link to={"/admin/admin/control"}>Admin</Link>
            </li>
          ) : null}
        </ul>
      </div>
      <div className="admin_body">{props.children}</div>
    </div>
  );
};

export default Admin;
