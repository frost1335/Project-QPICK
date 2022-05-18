import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createBrand, editBrand } from "../../../../actions";
import FormInputs from "../../../../components/FormInputs/FormInputs";
import {
  createControl,
  validate,
  validateForm,
} from "../../../../form/formFramework";

const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [brandData, setBrandData] = useState({
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

  const brand = useSelector((state) =>
    id ? state.brand.find((c) => c._id === id) : null
  );

  useEffect(() => {
    if (brand)
      setBrandData({
        isFormValid: false,
        formControls: {
          name: createControl(
            {
              type: "text",
              label: "Name",
              errorMessage: "Введите корректный name",
            },
            { required: true },
            brand.name
          ),
          img: createControl(
            {
              type: "file",
              label: "Image",
              errorMessage: "Введите корректный image",
            },
            { required: true },
            brand.img
          ),
        },
      });
  }, [brand]);

  const onChangeHandler = (event, controlName) => {
    const formControls = { ...brandData.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    setBrandData({ formControls, isFormValid: validateForm(formControls) });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      name: brandData.formControls.name.value,
      img: brandData.formControls.img.value,
    };

    if (id) {
      dispatch(editBrand(id, data));
    } else {
      dispatch(createBrand(data));
    }

    navigate("/admin/brand/control");
    clear();
  };

  const clear = () => {
    setBrandData({
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
        <h3>{id ? "Edit Brand" : "Create Brand"}</h3>
        <FormInputs form={brandData} onChangeHandler={onChangeHandler} />
        <div className="form_button">
          <button className="submit_button" disabled={!brandData.isFormValid}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
