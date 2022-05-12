import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../../../components";

import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

import "./Control.scss";
import { getAccessory } from "../../../../actions/product";
import { Link } from "react-router-dom";

const Control = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAccessory());
  }, [dispatch]);

  const onDeleteHandler = (id) => {};

  return (
    <div className="Control">
      <div className="control_menu">
        {products.data ? (
          <>
            <Link to="/admin/control/product/form">
              Add <AiOutlinePlus />
            </Link>
            {products.data.map((ctg, idx) => (
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
                        <Link to="/admin/control/product/form">
                          <MdOutlineEdit />
                        </Link>
                        <button onClick={() => onDeleteHandler(pdct._id)}>
                          <MdOutlineDelete />
                        </button>
                      </div>
                      {/* <div className="modal">
                        <div className="deleteBack"></div>
                        <div className="deleteModal">
                          Вы точно хотите удалить "{pdct.title}" элемент ?
                          <div className="modalButtons">
                            <button>Да</button>
                            <button>Нет</button>
                          </div>
                        </div>
                      </div> */}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Control;
