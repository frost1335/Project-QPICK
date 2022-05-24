import React, { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteSlider, getSliders } from "../../../../actions";
import { Loader } from "../../../../components";

import "./Control.scss";

const Control = () => {
  const dispatch = useDispatch();

  const sliders = useSelector((state) => state.sliders);

  useEffect(() => {
    dispatch(getSliders());
  }, [dispatch]);

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
    dispatch(deleteSlider(id));
  };

  return (
    <div className="Control image">
      <div className="control_menu">
        <>
          <Link to="/admin/slider/create">
            Add <AiOutlinePlus />
          </Link>
          <h3>Sliders</h3>
          {sliders.length ? (
            <ul>
              {sliders.map((slider, index) => (
                <li key={index}>
                  <span>Slider-{index + 1}</span>
                  <div className="li-item">
                    <div className="item_img">
                      <img src={slider.img[0].original.path} alt="slider-img" />
                    </div>
                    <div className="item_buttons">
                      <Link to={`/admin/slider/edit/${slider._id}`}>
                        <MdOutlineEdit />
                      </Link>
                      <button onClick={() => onModalHandler(slider._id)}>
                        <MdOutlineDelete />
                      </button>
                    </div>
                  </div>
                  <div className={`modal`} id={`modal-${slider._id}`}>
                    <div
                      className="deleteBack"
                      onClick={() => onCloseHandler()}
                    ></div>
                    <div className="deleteModal">
                      Удалить "картинку" ?
                      <div className="modalButtons">
                        <button onClick={() => onDeleteHandler(slider._id)}>
                          Да
                        </button>
                        <button onClick={() => onCloseHandler(slider._id)}>
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
