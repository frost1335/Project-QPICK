import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteShop } from "../../../../actions";

import { Loader } from "../../../../components";

const Control = () => {
  const dispatch = useDispatch();
  const shops = useSelector((state) => state.shops);

  const onModalHandler = (id) => {
    document.getElementById(`modal-${id}`).style.display = "block";
  };

  const onCloseHandler = (id) => {
    if (id) {
      document.getElementById(`modal-${id}`).style.display = "none";
    } else {
      document
        .querySelectorAll(".modal")
        .forEach((elem) => (elem.style.display = "none"));
    }
  };

  const onDeleteHandler = (id) => {
    document.getElementById(`modal-${id}`).style.display = "none";
    dispatch(deleteShop(id));
  };

  return (
    <div className="Control">
      <div className="control_menu">
        <>
          <Link to="/admin/shop/create">
            Add <AiOutlinePlus />
          </Link>
          <h3>Shops</h3>
          {shops.length ? (
            <ul>
              {shops.map((shop, index) => (
                
                <li key={index}>
                  <div className="li-item">
                    {console.log(shop.img)}
                    <div className="item_img">
                      <img src={shop.img[0].thumbnail.path} alt="shop-img" />
                    </div>
                    <p>{shop.name}</p>
                    <div className="item_buttons">
                      <Link to={`/admin/shop/edit/${shop._id}`}>
                        <MdOutlineEdit />
                      </Link>
                      <button onClick={() => onModalHandler(shop._id)}>
                        <MdOutlineDelete />
                      </button>
                    </div>
                  </div>
                  <div className={`modal`} id={`modal-${shop._id}`}>
                    <div
                      className="deleteBack"
                      onClick={() => onCloseHandler()}
                    ></div>
                    <div className="deleteModal">
                      Удалить "{shop.name}" ?
                      <div className="modalButtons">
                        <button onClick={() => onDeleteHandler(shop._id)}>
                          Да
                        </button>
                        <button onClick={() => onCloseHandler(shop._id)}>
                          Нет
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <Loader />
          )}
        </>
      </div>
    </div>
  );
};

export default Control;
