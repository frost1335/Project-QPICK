import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../../../components";

import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";

import "./Control.scss";
import { getAccessory } from "../../../../actions/product";

const Control = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAccessory());
  }, [dispatch]);

  return (
    <div className="Control">
      <div className="control_menu">
        {products.data ? (
          products.data.map((ctg, idx) => (
            <div className="menu_category" key={idx}>
              <h3>{ctg.name}</h3>
              <ul>
                {ctg.products.map((pdct, index) => (
                  <li key={index}>
                    <div className="item_img">
                      <img src={pdct.img} alt="product-img" />
                    </div>
                    <p>{pdct.title}</p>
                    <div className="item_buttons">
                      <button>
                        <MdOutlineEdit />
                      </button>
                      <button>
                        <MdOutlineDelete />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Control;
