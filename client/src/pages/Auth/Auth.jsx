import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../../api";
import FormInputs from "../../components/FormInputs/FormInputs";
import {
  createControl,
  validate,
  validateForm,
} from "../../form/formFramework";

import "./Auth.scss";

const Auth = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loginData, setLoginData] = useState({
    isFormValid: false,
    formControls: {
      email: createControl(
        {
          type: "email",
          label: "Email",
          errorMessage: "Введите корректный email address",
        },
        {
          required: true,
          email: true,
        }
      ),
      passowrd: createControl(
        {
          type: "password",
          label: "Password",
          errorMessage: "Введите корректный password",
        },
        {
          required: true,
          minLength: 6,
        }
      ),
    },
  });

  useEffect(() => {
    if (localStorage.getItem("authData")) {
      navigate("/admin/control");
    }
  }, [navigate]);

  const onChangeHandler = (event, controlName) => {
    const formControls = { ...loginData.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    setLoginData({ formControls, isFormValid: validateForm(formControls) });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.authLogin({
        email: loginData.formControls.email.value,
        password: loginData.formControls.passowrd.value,
      });

      if (data.success) {
        localStorage.setItem("authData", data.data._id);
        navigate("/admin/control");
      }
    } catch (error) {
      setTimeout(() => {
        setError("");
      }, 5000);
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="Auth">
      <div className="auth_content">
        <h3>Админский вход</h3>
        <span>{error ? error : null}</span>
        <form onSubmit={submitHandler}>
          <FormInputs form={loginData} onChangeHandler={onChangeHandler} />
          <div className="form_button">
            <button type="submit" disabled={!loginData.isFormValid}>
              Вход
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
