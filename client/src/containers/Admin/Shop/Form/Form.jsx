import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createShop, editShop } from "../../../../actions";
import FormInputs from "../../../../components/FormInputs/FormInputs";
import {
  createControl,
  validate,
  validateFile,
  validateForm,
} from "../../../../form/formFramework";

import "./Form.scss";

const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [shopData, setShopData] = useState({
    isFormValid: false,
    formControls: {
      name: createControl(
        {
          type: "text",
          label: "Name",
          errorMessage: "Введите корректный name",
        },
        { required: true }
      ),
      img: createControl(
        {
          type: "file",
          label: "Image",
          errorMessage: "Введите корректный image",
        },
        { required: true, maxSize: 3200000 }
      ),
    },
  });

  const shop = useSelector((state) =>
    id ? state.shops.find((sh) => sh._id === id) : null
  );

  useEffect(() => {
    if (shop)
      setShopData({
        isFormValid: false,
        formControls: {
          name: createControl(
            {
              type: "text",
              label: "Name",
              errorMessage: "Введите корректный name",
            },
            { required: true },
            shop.name
          ),
          img: createControl(
            {
              type: "file",
              label: "Image",
              errorMessage: "Введите корректный image",
            },
            { required: true },
            shop.img
          ),
        },
      });
  }, [shop]);

  const onChangeHandler = (event, controlName) => {
    const formControls = { ...shopData.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    setShopData({ formControls, isFormValid: validateForm(formControls) });
  };

  const onFileChange = (event, controlName) => {
    const formControls = { ...shopData.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.files[0];
    control.touched = true;
    control.valid = validateFile(control.value, control.validation);

    formControls[controlName] = control;

    console.log(formControls);
    setShopData({ formControls, isFormValid: validateForm(formControls) });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", shopData.formControls.name.value);
    formData.append("img", shopData.formControls.img.value);

    if (id) {
      dispatch(editShop(id, formData));
    } else {
      dispatch(createShop(formData));
    }

    navigate("/admin/shop/control");
    clear();
  };

  const clear = () => {
    setShopData({
      isFormValid: false,
      formControls: {
        name: createControl(
          {
            type: "text",
            label: "Name",
            errorMessage: "Введите корректный name",
          },
          { required: true }
        ),
        img: createControl(
          {
            type: "file",
            label: "Image",
            errorMessage: "Введите корректный image",
          },
          { required: true }
        ),
      },
    });
  };

  return (
    <div className="Form">
      <form className="create_form" onSubmit={submitHandler}>
        <h3>{id ? "Edit Shop" : "Create Shop"}</h3>
        <FormInputs
          form={shopData}
          onFileChange={onFileChange}
          onChangeHandler={onChangeHandler}
        />
        <div className="form_button">
          <button className="submit_button" disabled={!shopData.isFormValid}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
