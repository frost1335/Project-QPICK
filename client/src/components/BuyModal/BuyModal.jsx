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

    const data = {
      name: buyData.formControls.name.value,
      surename: buyData.formControls.surename.value,
      phone: buyData.formControls.phone.value,
      products: props.products,
    };

    dispatch(createBuy(data));
    setSubmitted(true);
  };

  const onCloseModal = () => {
    navigate("/");
  };

  console.log(submitted);

  return (
    <div className="BuyModal">
      <div className="same_modal">
        <button className="close_modal" onClick={onCloseModal}>
          <GrClose />
        </button>
        {submitted ? (
          <div className="after_form">
            <div className="society_icons">
              <div className="icon"></div>
            </div>
            <p>Мы свяжемся с вами в ближайшее время</p>
            <div className="after_button">
              <button>Хорошо</button>
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
