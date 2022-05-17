import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CreateInput, FileUpload } from "../../../../components";

import "./Form.scss";

const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [categoryData, setCategoryData] = useState({
    name: "",
    img: "",
  });

  const category = useSelector((state) =>
    id ? state.categories.find((c) => c._id === id) : null
  );

  useEffect(() => {
    if (category) setCategoryData(category);
  }, [category, setCategoryData]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (id) {
      dispatch();
    } else {
      dispatch();
    }

    navigate("/admin/category/control");
    clear();
  };

  const clear = () => {
    setCategoryData({
      name: "",
      img: "",
    });
  };

  return (
    <div className="Form">
      <div className="create_form" onSubmit={submitHandler}>
        <h3>{id ? "Edit Product" : "CreateProduct"}</h3>
        <CreateInput
          type="text"
          name="name"
          label={"Category"}
          forId={Math.random()}
          value={categoryData.title}
          placeholder={"Category name"}
          setData={(product, value) =>
            setCategoryData({ ...product, name: value })
          }
          data={categoryData}
        />
        <FileUpload
          multiple={false}
          label="Image upload"
          value={categoryData.img}
          forId={Math.random()}
          setData={(product, value) =>
            setCategoryData({ ...product, img: value })
          }
          data={categoryData}
        />
        <div className="form_button">
          <button className="submit_button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
