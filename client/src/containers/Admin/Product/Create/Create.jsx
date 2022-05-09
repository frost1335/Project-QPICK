import React, { useState } from "react";
import { CreateInput, Selector } from "../../../../components";

import "./Create.scss";

const Create = () => {
  const [productData, setProductData] = useState({
    title: "",
    price: "",
    img: "",
    categoryID: "",
    shopID: "",
    shopInfo: "",
    categoryInfo: "",
    description: "",
    tags: "",
    rating: "",
  });

  console.log(productData);

  return (
    <div className="Create">
      <form className="create_form">
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
        <CreateInput
          type="text"
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
            setProductData({ ...product, tags: value })
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
          data={productData}
        />
      </form>
    </div>
  );
};

export default Create;
