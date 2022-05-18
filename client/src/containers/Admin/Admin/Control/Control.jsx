import React, { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAdmin, getAdmins } from "../../../../actions";
import { Loader } from "../../../../components";

import "./Control.scss";

const Control = () => {
  window.scroll({ top: 0 });
  const dispatch = useDispatch();
  const admins = useSelector((state) => state.admins);

  useEffect(() => {
    dispatch(getAdmins());
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
    dispatch(deleteAdmin(id));
  };

  return (
    <div className="Control">
      <div className="control_menu">
        <>
          <Link to="/admin/admin/create">
            Add <AiOutlinePlus />
          </Link>
          <h3>Admins</h3>
          {admins.length ? (
            <ul>
              {admins.map((admin, index) => (
                <li key={index}>
                  <div className="li-item">
                    <h4>{admin.name}</h4>
                    <p>{admin.email}</p>
                    <div className="item_buttons">
                      <Link to={`/admin/admin/edit/${admin._id}`}>
                        <MdOutlineEdit />
                      </Link>
                      <button onClick={() => onModalHandler(admin._id)}>
                        <MdOutlineDelete />
                      </button>
                    </div>
                  </div>
                  <div className={`modal`} id={`modal-${admin._id}`}>
                    <div
                      className="deleteBack"
                      onClick={() => onCloseHandler()}
                    ></div>
                    <div className="deleteModal">
                      Удалить "{admin.name}" ?
                      <div className="modalButtons">
                        <button onClick={() => onDeleteHandler(admin._id)}>
                          Да
                        </button>
                        <button onClick={() => onCloseHandler(admin._id)}>
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
