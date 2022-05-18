import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createAdmin, editAdmin } from "../../../../actions";
import FormInputs from "../../../../components/FormInputs/FormInputs";
import {
  createControl,
  validate,
  validateForm,
} from "../../../../form/formFramework";

import "./Form.scss";

const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [adminData, setAdminData] = useState({
    isFormValid: false,
    formControls: {
      name: createControl(
        {
          type: "text",
          label: "Name",
          errorMessage: "Введите корректный name",
        },
        {
          required: true,
        }
      ),
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
          type: "number",
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

  const admin = useSelector((state) =>
    id ? state.admins.find((c) => c._id === id) : null
  );

  useEffect(() => {
    if (admin)
      setAdminData({
        isFormValid: false,
        formControls: {
          name: createControl(
            {
              type: "text",
              label: "Name",
              errorMessage: "Введите корректный name",
            },
            {
              required: true,
            },
            admin.name
          ),
          email: createControl(
            {
              type: "email",
              label: "Email",
              errorMessage: "Введите корректный email address",
            },
            {
              required: true,
              email: true,
            },
            admin.email
          ),
          passowrd: createControl(
            {
              type: "number",
              label: "Password",
              errorMessage: "Введите корректный password",
            },
            {
              required: true,
              minLength: 6,
            },
            admin.password
          ),
        },
      });
  }, [admin]);

  const onChangeHandler = (event, controlName) => {
    const formControls = { ...adminData.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    setAdminData({ formControls, isFormValid: validateForm(formControls) });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      name: adminData.formControls.name.value,
      email: adminData.formControls.email.value,
      password: adminData.formControls.passowrd.value,
    };

    if (id) {
      dispatch(editAdmin(id, data));
    } else {
      dispatch(createAdmin(data));
    }

    navigate("/admin/admin/control");
    clear();
  };

  const clear = () => {
    setAdminData({
      isFormValid: false,
      formControls: {
        name: createControl(
          {
            type: "text",
            label: "Name",
            errorMessage: "Введите корректный name",
          },
          {
            required: true,
          }
        ),
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
  };

  return (
    <div className="Form">
      <form className="create_form" onSubmit={submitHandler}>
        <h3>{id ? "Edit Category" : "Create Category"}</h3>
        <FormInputs form={adminData} onChangeHandler={onChangeHandler} />
        <div className="form_button">
          <button className="submit_button" disabled={!adminData.isFormValid}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
