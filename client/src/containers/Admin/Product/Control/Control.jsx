import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../../../components";

import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

import "./Control.scss";
import { deleteProduct, getProducts } from "../../../../actions";
import { Link } from "react-router-dom";

const Control = () => {
  window.scroll({ top: 0 });
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const onModalHandler = (id) => {
    document.getElementById(`modal-${id}`).style.display = "block";
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
    dispatch(deleteProduct(id));
  };

  return (
    <div className="Control">
      <div className="control_menu">
        <>
          <Link to="/admin/product/create">
            Add <AiOutlinePlus />
          </Link>
          {products.length ? (
            products.map((ctg, idx) =>
              ctg.products.length > 0 ? (
                <div className="menu_category" key={idx}>
                  <h3>{ctg.name}</h3>
                  <ul>
                    {ctg.products.map((pdct, index) => (
                      <li key={index}>
                        <div className="li-item">
                          <div className="item_img">
                            <img
                              src={pdct.img[0].thumbnail.path}
                              alt="product-img"
                            />
                          </div>
                          <p>{pdct.title}</p>
                          <div className="item_buttons">
                            <Link to={`/admin/product/edit/${pdct._id}`}>
                              <MdOutlineEdit />
                            </Link>
                            <button onClick={() => onModalHandler(pdct._id)}>
                              <MdOutlineDelete />
                            </button>
                          </div>
                        </div>
                        <div className={`modal`} id={`modal-${pdct._id}`}>
                          <div
                            className="deleteBack"
                            onClick={() => onCloseHandler()}
                          ></div>
                          <div className="deleteModal">
                            Удалить "{pdct.title}" ?
                            <div className="modalButtons">
                              <button onClick={() => onDeleteHandler(pdct._id)}>
                                Да
                              </button>
                              <button onClick={() => onCloseHandler(pdct._id)}>
                                Нет
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null
            )
          ) : (
            <Loader />
          )}
        </>
      </div>
    </div>
  );
};

export default Control;
