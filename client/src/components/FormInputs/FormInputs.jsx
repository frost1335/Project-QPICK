import React from "react";
import CreateInput from "../CreateInput/CreateInput";
import FileUpload from "../FileBase64/FileUpload";
import RatingInput from "../Rating/Rating";
import Selector from "../Selector/Selector";
import Textarea from "../Textarea/Textarea";

const FormInputs = (props) => {
  return (
    <>
      {Object.keys(props.form.formControls).map((controlName, index) => {
        const control = props.form.formControls[controlName];
        if (
          control.type === "email" ||
          control.type === "text" ||
          control.type === "number" ||
          control.type === "password"
        ) {
          return (
            <CreateInput
              key={controlName + index}
              type={control.type}
              value={control.value}
              valid={control.valid}
              touched={control.touched}
              label={control.label}
              errorMessage={control.errorMessage}
              shouldValidate={!!control.validation}
              onChange={(event) => props.onChangeHandler(event, controlName)}
            />
          );
        } else if (control.type === "area") {
          return (
            <Textarea
              key={controlName + index}
              type={control.type}
              value={control.value}
              valid={control.valid}
              touched={control.touched}
              label={control.label}
              errorMessage={control.errorMessage}
              shouldValidate={!!control.validation}
              onChange={(event) => props.onChangeHandler(event, controlName)}
            />
          );
        } else if (control.type === "select") {
          return (
            <Selector
              key={controlName + index}
              type={control.type}
              value={control.value}
              valid={control.valid}
              touched={control.touched}
              label={control.label}
              array={control.array}
              errorMessage={control.errorMessage}
              shouldValidate={!!control.validation}
              onChange={(event) => props.onChangeHandler(event, controlName)}
            />
          );
        } else if (control.type === "file") {
          return (
            <FileUpload
              key={controlName + index}
              type={control.type}
              value={control.value}
              valid={control.valid}
              touched={control.touched}
              label={control.label}
              errorMessage={control.errorMessage}
              shouldValidate={!!control.validation}
              onChange={(event) => props.onFileChange(event, controlName)}
            />
          );
        } else if (control.type === "rating") {
          return (
            <RatingInput
              size="large"
              precision={0.5}
              o
              key={controlName + index}
              type={control.type}
              value={control.value}
              valid={control.valid}
              touched={control.touched}
              label={control.label}
              errorMessage={control.errorMessage}
              shouldValidate={!!control.validation}
              onChange={(event, newValue) =>
                props.onChangeHandler(event, controlName)
              }
            />
          );
        }
      })}
    </>
  );
};

export default FormInputs;
