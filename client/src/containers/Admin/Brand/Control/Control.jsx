import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBrand } from "../../../../actions";
import { Loader } from "../../../../components";

const Control = () => {
  window.scroll({ top: 0 });
  const dispatch = useDispatch();
  const brand = useSelector((state) => state.brand);

  console.log(brand);

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
    dispatch(deleteBrand(id));
  };

  return (
    <div className="Control">
      <div className="control_menu">
        <>
          <Link to="/admin/brand/create">
            Add <AiOutlinePlus />
          </Link>
          <h3>Brands</h3>
          {brand.length ? (
            <ul>
              {brand.map((b, index) => (
                <li key={index}>
                  <div className="li-item">
                    <div className="item_img">
                      <img src={b.img[0].thumbnail.path} alt="category-img" />
                    </div>
                    <p>{b.name}</p>
                    <div className="item_buttons">
                      <Link to={`/admin/brand/edit/${b._id}`}>
                        <MdOutlineEdit />
                      </Link>
                      <button onClick={() => onModalHandler(b._id)}>
                        <MdOutlineDelete />
                      </button>
                    </div>
                  </div>
                  <div className={`modal`} id={`modal-${b._id}`}>
                    <div
                      className="deleteBack"
                      onClick={() => onCloseHandler()}
                    ></div>
                    <div className="deleteModal">
                      Удалить "{b.name}" ?
                      <div className="modalButtons">
                        <button onClick={() => onDeleteHandler(b._id)}>
                          Да
                        </button>
                        <button onClick={() => onCloseHandler(b._id)}>
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
