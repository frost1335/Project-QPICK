function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateNumber = (number) => {
  const re = /^[1-9]\d*(\.\d+)?$/;
  return re.test(Number(number));
};

export const createControl = (config, validation, value) => {
  return {
    ...config,
    validation,
    valid: value ? true : !validation,
    touched: false,
    value: value || "",
  };
};

export const validate = (value, validation = null) => {
  if (!validation) {
    return true;
  }

  let isValid = true;

  if (validation.required) {
    isValid = value.trim() !== "" && isValid;
  }

  if (validation.email) {
    isValid = validateEmail(value) && isValid;
  }

  if (validation.minLength) {
    isValid = value.length >= validation.minLength && isValid;
  }

  if (validation.maxLength) {
    isValid = value.length <= validation.maxLength && isValid;
  }

  if (validation.number) {
    isValid = validateNumber(value) && isValid;
  }

  return isValid;
};

export const validateFile = (value, validation = null) => {
  if (!validation) {
    return true;
  }
  let isValid = true;

  if (validation.required) {
    isValid = !!value && isValid;
  }

  if (validation.maxSize) {
    isValid = value.size <= validation.maxSize;
  }

  return isValid;
};

export const validateForm = (formControls) => {
  let isFormValid = true;

  for (let control in formControls) {
    if (formControls.hasOwnProperty(control)) {
      isFormValid = formControls[control].valid && isFormValid;
    }
  }

  return isFormValid;
};
