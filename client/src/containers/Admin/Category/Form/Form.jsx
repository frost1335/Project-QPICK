import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createCategory, editCategory } from "../../../../actions";
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
  const [categoryData, setCategoryData] = useState({
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

  const category = useSelector((state) =>
    id ? state.categories.find((c) => c._id === id) : null
  );

  useEffect(() => {
    if (category)
      setCategoryData({
        isFormValid: false,
        formControls: {
          name: createControl(
            {
              type: "text",
              label: "Name",
              errorMessage: "Введите корректный name",
            },
            { required: true },
            category.name
          ),
          img: createControl(
            {
              type: "file",
              label: "Image",
              errorMessage: "Введите корректный image",
            },
            { required: true },
            category.img
          ),
        },
      });
  }, [category]);

  const onChangeHandler = (event, controlName) => {
    const formControls = { ...categoryData.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    setCategoryData({ formControls, isFormValid: validateForm(formControls) });
  };

  const onFileChange = (event, controlName) => {
    const formControls = { ...categoryData.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.files[0];
    control.touched = true;
    control.valid = validateFile(control.value, control.validation);

    formControls[controlName] = control;

    console.log(formControls);
    setCategoryData({ formControls, isFormValid: validateForm(formControls) });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", categoryData.formControls.name.value);
    formData.append("img", categoryData.formControls.img.value);

    if (id) {
      dispatch(editCategory(id, formData));
    } else {
      dispatch(createCategory(formData));
    }

    navigate("/admin/category/control");
    clear();
  };

  const clear = () => {
    setCategoryData({
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
        <h3>{id ? "Edit Category" : "Create Category"}</h3>
        <FormInputs
          form={categoryData}
          onFileChange={onFileChange}
          onChangeHandler={onChangeHandler}
        />
        <div className="form_button">
          <button
            className="submit_button"
            disabled={!categoryData.isFormValid}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
