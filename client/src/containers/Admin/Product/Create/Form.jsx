import React, { useEffect, useState } from "react";
import {
  CreateInput,
  FileUpload,
  Selector,
  Textarea,
} from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, getAccessory } from "../../../../actions/product";
import { getAllShops } from "../../../../actions/shops";

import "./Form.scss";
import { getProductById } from "../../../../actions/productID";

const Form = ({ currentID, setCurrentID }) => {
  const [productData, setProductData] = useState({
    title: "",
    price: "",
    img: "",
    categoryID: "",
    shopID: "",
    description: "",
    tags: "",
    rating: "",
  });
  const dispatch = useDispatch();
  const product = useSelector((state) => (currentID ? state.productID : null));

  console.log(product);
  const products = useSelector((state) => state.products);
  const shops = useSelector((state) => state.shops);

  useEffect(() => {
    if (currentID) {
      dispatch(getProductById(currentID));
    }
    dispatch(getAccessory());
    dispatch(getAllShops());
  }, [dispatch, currentID]);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("submit");

    dispatch(createProduct(productData));
    clear();
  };

  const clear = () => {
    setProductData({
      title: "",
      price: "",
      img: "",
      categoryID: "",
      shopID: "",
      description: "",
      tags: "",
      rating: "",
    });
  };

  return (
    <div className="Create">
      <form className="create_form" onSubmit={submitHandler}>
        <CreateInput
          type="text"
          name="title"
          label={"Product"}
          forId={Math.random()}
          value={productData.title}
          placeholder={"Produc title"}
          setData={(product, value) =>
            setProductData({ ...product, title: value })
          }
          data={productData}
        />
        <CreateInput
          type="number"
          name="price"
          label={"Price"}
          forId={Math.random()}
          value={productData.price}
          placeholder={"Produc price"}
          setData={(product, value) =>
            setProductData({ ...product, price: value })
          }
          data={productData}
        />
        <Textarea
          name="description"
          label={"Description"}
          forId={Math.random()}
          value={productData.description}
          placeholder={"Produc description"}
          setData={(product, value) =>
            setProductData({ ...product, description: value })
          }
          data={productData}
        />
        <CreateInput
          type="text"
          name="tags"
          label={"Tags"}
          forId={Math.random()}
          value={productData.tags}
          placeholder={"namuna:nike,adidas,futbolka,yozgi"}
          setData={(product, value) =>
            setProductData({ ...product, tags: value.split(",") })
          }
          data={productData}
        />
        <CreateInput
          type="number"
          name="rating"
          label={"Rating"}
          pattern="/^-?\d+\.?\d*$/"
          maxLength="1"
          forId={Math.random()}
          value={productData.rating}
          placeholder={"namuna:1 yoki 2 yoki 3.6"}
          setData={(product, value) =>
            setProductData({ ...product, rating: value })
          }
          data={productData}
        />
        <Selector
          forId={Math.random()}
          label="Shop"
          setData={(product, value) =>
            setProductData({ ...product, shopID: value })
          }
          array={shops.data ? shops.data : null}
          data={productData}
        />
        <Selector
          forId={Math.random()}
          label="Category"
          setData={(product, value) =>
            setProductData({ ...product, categoryID: value })
          }
          array={products.data ? products.data : null}
          data={productData}
        />
        <FileUpload
          multiple={false}
          label="Image upload"
          value={productData.img}
          forId={Math.random()}
          setData={(product, value) =>
            setProductData({ ...product, img: value })
          }
          data={productData}
        />
        <div className="form_button">
          <button className="submit_button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
