import React, { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { deleteBannner, getBanners } from "../../../../actions";
import { Loader } from "../../../../components";

const Control = () => {
  const dispatch = useDispatch();

  const banners = useSelector((state) => state.banners);

  useEffect(() => {
    dispatch(getBanners());
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
    dispatch(deleteBannner(id));
  };
  return (
    <div className="Control image">
      <div className="control_menu">
        <>
          {banners.length < 3 ? (
            <Link to="/admin/banner/create">
              Add <AiOutlinePlus />
            </Link>
          ) : null}
          <h3>Banners</h3>
          {banners.length ? (
            <ul>
              {banners.map((banner, index) => (
                <li key={index}>
                  <span>Slider-{index + 1}</span>
                  <div className="li-item">
                    <div className="item_img">
                      <img src={banner.img[0].original.path} alt="banner-img" />
                    </div>
                    <div className="item_buttons">
                      <Link to={`/admin/banner/edit/${banner._id}`}>
                        <MdOutlineEdit />
                      </Link>
                      <button onClick={() => onModalHandler(banner._id)}>
                        <MdOutlineDelete />
                      </button>
                    </div>
                  </div>
                  <div className={`modal`} id={`modal-${banner._id}`}>
                    <div
                      className="deleteBack"
                      onClick={() => onCloseHandler()}
                    ></div>
                    <div className="deleteModal">
                      Удалить "картинку" ?
                      <div className="modalButtons">
                        <button onClick={() => onDeleteHandler(banner._id)}>
                          Да
                        </button>
                        <button onClick={() => onCloseHandler(banner._id)}>
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
