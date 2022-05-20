import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../../../components";

import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

import "./Control.scss";
import { Link } from "react-router-dom";
import { deleteCategory } from "../../../../actions/";

const Control = () => {
  window.scroll({ top: 0 });
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

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
    dispatch(deleteCategory(id));
  };

  return (
    <div className="Control">
      <div className="control_menu">
        <>
          <Link to="/admin/category/create">
            Add <AiOutlinePlus />
          </Link>
          <h3>Categories</h3>
          {categories.length ? (
            <ul>
              {categories.map((ctg, index) => (
                <li key={index}>
                  <div className="li-item">
                    <div className="item_img">
                      <img src={ctg.img[0].thumbnail.path} alt="category-img" />
                    </div>
                    <p>{ctg.name}</p>
                    <div className="item_buttons">
                      <Link to={`/admin/category/edit/${ctg._id}`}>
                        <MdOutlineEdit />
                      </Link>
                      <button onClick={() => onModalHandler(ctg._id)}>
                        <MdOutlineDelete />
                      </button>
                    </div>
                  </div>
                  <div className={`modal`} id={`modal-${ctg._id}`}>
                    <div
                      className="deleteBack"
                      onClick={() => onCloseHandler()}
                    ></div>
                    <div className="deleteModal">
                      Удалить "{ctg.name}" ?
                      <div className="modalButtons">
                        <button onClick={() => onDeleteHandler(ctg._id)}>
                          Да
                        </button>
                        <button onClick={() => onCloseHandler(ctg._id)}>
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
