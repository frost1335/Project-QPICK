import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBuy } from "../../actions";
import {
  createControl,
  validate,
  validateForm,
} from "../../form/formFramework";
import FormInputs from "../FormInputs/FormInputs";

import { GrClose } from "react-icons/gr";
import { BsCheck2 } from "react-icons/bs";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";

import "./BuyModal.scss";
import { useNavigate } from "react-router-dom";

const BuyModal = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [buyData, setBuyData] = useState({
    isFormValid: false,
    formControls: {
      name: createControl(
        {
          type: "text",
          label: "Имя",
          errorMessage: "Введите свою имю",
        },
        {
          required: true,
        }
      ),
      surename: createControl(
        {
          type: "text",
          label: "Фамилия",
          errorMessage: "Введите свою фамилию",
        },
        {
          required: true,
        }
      ),
      phone: createControl(
        {
          type: "number",
          label: "Телефон номер",
          errorMessage: "Введите свою телефон номер",
        },
        {
          required: true,
          number: true,
        }
      ),
    },
  });
  const [submitted, setSubmitted] = useState(false);

  const onChangeHandler = (event, controlName) => {
    const formControls = { ...buyData.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    setBuyData({ formControls, isFormValid: validateForm(formControls) });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let arr = [];

    if (!props.id) {
      console.log(props.products);
      props.products.map((pdct) => arr.push(pdct._id));

      console.log(arr);

      arr.forEach((pdct) => {
        const card = document.getElementById(`CartCard-${pdct}`);
        card.remove();
        localStorage.removeItem(`${pdct}-cart`);
      });
    }

    const data = {
      name: buyData.formControls.name.value,
      surename: buyData.formControls.surename.value,
      phone: buyData.formControls.phone.value,
      products: arr.length ? arr : props.products._id,
    };

    dispatch(createBuy(data));
    setSubmitted(true);
  };

  const onCloseModal = () => {
    if (props.id) {
      navigate(
        window.location.pathname.replace(`/buy/${props.id}`, "") === ""
          ? "/"
          : window.location.pathname.replace(`/buy/${props.id}`, "")
      );
    } else {
      props.setOnBuy(false);
    }
  };

  return (
    <div className="BuyModal">
      <div className="same_modal">
        <button className="close_modal" onClick={onCloseModal}>
          <GrClose />
        </button>
        {submitted ? (
          <div className="after_form">
            <h3>
              Ваш запрос получен{" "}
              <span>
                <BsCheck2 />
              </span>
            </h3>
            <p>Мы свяжемся с вами в ближайшее время</p>
            <div className="after_button">
              <button onClick={onCloseModal}>Хорошо</button>
            </div>
            <div className="social">
              <div className="social_link">
                <FaTelegramPlane />
                <a href={"https://t.me/R_Dilrozbek"}>Наш телеграм</a>
              </div>
              <div className="social_link">
                <MdOutlineLocalPhone />
                <a href={"tel:+998931897318"}>Наш оператор</a>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h3>Оформление</h3>
            <form onSubmit={submitHandler}>
              <FormInputs form={buyData} onChangeHandler={onChangeHandler} />
              <div className="form_button">
                <button type="submit" disabled={!buyData.isFormValid}>
                  Отправить
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default BuyModal;
