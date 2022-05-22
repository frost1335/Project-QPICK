import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createSlider, editSlider } from "../../../../actions";
import FormInputs from "../../../../components/FormInputs/FormInputs";
import {
  createControl,
  validateFile,
  validateForm,
} from "../../../../form/formFramework";

import "./Form.scss";

const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sliderData, setSliderData] = useState({
    isFormValid: false,
    formControls: {
      img: createControl(
        {
          type: "file",
          label: "Image",
          errorMessage: "Введите корректный image",
        },
        { required: true, maxSize: 4200000 }
      ),
    },
  });

  const slider = useSelector((state) =>
    id ? state.sliders.find((s) => s._id === id) : null
  );

  useEffect(() => {
    if (slider)
      setSliderData({
        isFormValid: false,
        formControls: {
          img: createControl(
            {
              type: "file",
              label: "Image",
              errorMessage: "Введите корректный image",
            },
            { required: true },
            slider.img
          ),
        },
      });
  }, [slider]);

  const onFileChange = (event, controlName) => {
    const formControls = { ...sliderData.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.files[0];
    control.touched = true;
    control.valid = validateFile(control.value, control.validation);

    formControls[controlName] = control;

    console.log(formControls);
    setSliderData({ formControls, isFormValid: validateForm(formControls) });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("img", sliderData.formControls.img.value);

    if (id) {
      dispatch(editSlider(id, formData));
    } else {
      dispatch(createSlider(formData));
    }

    navigate("/admin/slider/control");
    clear();
  };

  const clear = () => {
    setSliderData({
      isFormValid: false,
      formControls: {
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
        <FormInputs form={sliderData} onFileChange={onFileChange} />
        <div className="form_button">
          <button className="submit_button" disabled={!sliderData.isFormValid}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
