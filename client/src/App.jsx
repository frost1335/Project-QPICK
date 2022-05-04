import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAccessory } from "./actions/product";
import { getCategories } from "./actions/category";
import { getAllShops } from "./actions/shops";
import { getAllBrands } from "./actions/brand";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/Product/Product";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAccessory());
    dispatch(getCategories());
    dispatch(getAllShops());
    dispatch(getAllBrands());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/view/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
