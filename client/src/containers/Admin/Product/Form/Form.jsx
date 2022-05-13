import React, { useEffect, useState } from "react";
import {
  CreateInput,
  FileUpload,
  Selector,
  Textarea,
} from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  editProduct,
  getAccessory,
} from "../../../../actions/product";
import { getAllShops } from "../../../../actions/shops";
import { getProductById } from "../../../../actions/productID";

import "./Form.scss";
import { useParams } from "react-router-dom";

const Form = () => {
  const { id } = useParams();
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
  const product = useSelector((state) => (id ? state.productID : null));

  const categories = useSelector((state) => state.categories);
  const shops = useSelector((state) => state.shops);

  useEffect(() => {
    console.log(product);
    if (id) dispatch(getProductById(id));
    if (product) setProductData(product);
    dispatch(getAccessory());
    dispatch(getAllShops());
  }, [dispatch, id, product, setProductData]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (id) {
      dispatch(editProduct(id, productData));
    } else {
      dispatch(createProduct(productData));
    }

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
        <h3>{id ? "Edit Product" : "CreateProduct"}</h3>
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
          value={productData.shopID}
        />
        <Selector
          forId={Math.random()}
          label="Category"
          setData={(product, value) =>
            setProductData({ ...product, categoryID: value })
          }
          array={categories.data ? categories.data : null}
          data={productData}
          value={productData.categoryID}
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
