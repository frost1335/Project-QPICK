import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, editProduct, editProducts } from "../../../../actions/";

import "./Form.scss";
import { useNavigate, useParams } from "react-router-dom";
import {
  createControl,
  validate,
  validateFile,
  validateForm,
} from "../../../../form/formFramework";
import FormInputs from "../../../../components/FormInputs/FormInputs";

const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    id ? state.product.find((p) => p._id === id) : null
  );

  console.log(product);

  const [productData, setProductData] = useState({
    isFormValid: false,
    formControls: {
      title: createControl(
        {
          type: "text",
          label: "Title",
          errorMessage: "Введите корректный email",
        },
        { required: true }
      ),
      price: createControl(
        {
          type: "number",
          label: "Price",
          errorMessage: "Введите корректный price",
        },
        { required: true, minLength: 4 }
      ),
      rating: createControl(
        {
          type: "rating",
          label: "Rating",
          errorMessage: "Введите корректный rating",
        },
        { required: true, minLength: 1 }
      ),
      description: createControl(
        {
          type: "area",
          label: "Description",
          errorMessage: "Введите корректный description",
        },
        { required: true, minLength: 10 }
      ),
      size: createControl(
        {
          type: "text",
          label: "Sizes",
          errorMessage: "Введите корректный size",
        },
        { required: true }
      ),
      categoryID: createControl(
        {
          type: "select",
          label: "Category",
          array: "category",
          errorMessage: "Введите корректный category",
        },
        { required: true }
      ),
      shopID: createControl(
        {
          type: "select",
          label: "Shop",
          array: "shop",
          errorMessage: "Введите корректный shop",
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

  useEffect(() => {
    if (product)
      setProductData({
        isFormValid: false,
        formControls: {
          title: createControl(
            {
              type: "text",
              label: "Email",
              errorMessage: "Введите корректный email",
            },
            { required: true },
            product.title
          ),
          price: createControl(
            {
              type: "number",
              label: "Price",
              errorMessage: "Введите корректный price",
            },
            { required: true, minLength: 4 },
            +product.price
          ),
          rating: createControl(
            {
              type: "rating",
              label: "Rating",
              errorMessage: "Введите корректный rating",
            },
            { required: true, minLength: 1 },
            product.rating
          ),
          description: createControl(
            {
              type: "area",
              label: "Description",
              errorMessage: "Введите корректный description",
            },
            { required: true, minLength: 10 },
            product.description
          ),
          size: createControl(
            {
              type: "text",
              label: "Sizes",
              errorMessage: "Введите корректный size",
            },
            { required: true },
            product.size
          ),
          categoryID: createControl(
            {
              type: "select",
              label: "Category",
              array: "category",
              errorMessage: "Введите корректный category",
            },
            { required: true },
            product.categoryID
          ),
          shopID: createControl(
            {
              type: "select",
              label: "Shop",
              array: "shop",
              errorMessage: "Введите корректный shop",
            },
            { required: true },
            product.shopID
          ),
          img: createControl(
            {
              type: "file",
              label: "Image",
              errorMessage: "Введите корректный image",
            },
            { required: true },
            product.img
          ),
        },
      });
  }, [product, setProductData, dispatch]);

  const onChangeHandler = (event, controlName) => {
    const formControls = { ...productData.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    setProductData({ formControls, isFormValid: validateForm(formControls) });
  };

  const onFileChange = (event, controlName) => {
    const formControls = { ...productData.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.files[0];
    control.touched = true;
    control.valid = validateFile(control.value, control.validation);

    formControls[controlName] = control;

    setProductData({ formControls, isFormValid: validateForm(formControls) });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", productData.formControls.title.value);
    formData.append("price", productData.formControls.price.value);
    formData.append("img", productData.formControls.img.value);
    formData.append("categoryID", productData.formControls.categoryID.value);
    formData.append("shopID", productData.formControls.shopID.value);
    formData.append("description", productData.formControls.description.value);
    formData.append("size", productData.formControls.size.value);
    formData.append("rating", productData.formControls.rating.value);

    if (id) {
      dispatch(editProduct(id, formData));
      formData.delete("img");
      dispatch(editProducts(id, formData));
    } else {
      dispatch(createProduct(formData));
    }

    navigate("/admin/product/control");
    clear();
  };

  const clear = () => {
    setProductData({
      isFormValid: false,
      formControls: {
        title: createControl(
          {
            type: "text",
            label: "Email",
            errorMessage: "Введите корректный email",
          },
          { required: true }
        ),
        price: createControl(
          {
            type: "number",
            label: "Price",
            errorMessage: "Введите корректный price",
          },
          { required: true, minLength: 4 }
        ),
        rating: createControl(
          {
            type: "number",
            label: "Rating",
            errorMessage: "Введите корректный rating",
          },
          { required: true, minLength: 1, maxLength: 1 }
        ),
        tags: createControl(
          {
            type: "text",
            label: "Tags",
            errorMessage: "Введите корректный tags",
          },
          { required: true, minLength: 3 }
        ),
        description: createControl(
          {
            type: "area",
            label: "Description",
            errorMessage: "Введите корректный description",
          },
          { required: true, minLength: 10 }
        ),
        categoryID: createControl(
          {
            type: "select",
            label: "Category",
            array: "category",
            errorMessage: "Введите корректный category",
          },
          { required: true }
        ),
        shopID: createControl(
          {
            type: "select",
            label: "Shop",
            array: "shop",
            errorMessage: "Введите корректный shop",
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
    <div className="Create">
      <form className="create_form" onSubmit={submitHandler}>
        <h3>{id ? "Edit Product" : "CreateProduct"}</h3>
        <FormInputs
          form={productData}
          onFileChange={onFileChange}
          onChangeHandler={onChangeHandler}
        />
        <div className="form_button">
          <button className="submit_button" disabled={!productData.isFormValid}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
