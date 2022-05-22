import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createBanner, editBanner } from "../../../../actions";
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
  const [bannerData, setBannerData] = useState({
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

  const banner = useSelector((state) =>
    id ? state.banners.find((s) => s._id === id) : null
  );

  useEffect(() => {
    if (banner)
      setBannerData({
        isFormValid: false,
        formControls: {
          img: createControl(
            {
              type: "file",
              label: "Image",
              errorMessage: "Введите корректный image",
            },
            { required: true },
            banner.img
          ),
        },
      });
  }, [banner]);

  const onFileChange = (event, controlName) => {
    const formControls = { ...bannerData.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.files[0];
    control.touched = true;
    control.valid = validateFile(control.value, control.validation);

    formControls[controlName] = control;

    console.log(formControls);
    setBannerData({ formControls, isFormValid: validateForm(formControls) });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("img", bannerData.formControls.img.value);

    if (id) {
      dispatch(editBanner(id, formData));
    } else {
      dispatch(createBanner(formData));
    }

    navigate("/admin/banner/control");
    clear();
  };

  const clear = () => {
    setBannerData({
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
        <FormInputs form={bannerData} onFileChange={onFileChange} />
        <div className="form_button">
          <button className="submit_button" disabled={!bannerData.isFormValid}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
